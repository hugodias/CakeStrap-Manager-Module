<?php
# Componente para Upload e Downlload de arquivos.
class ArquivoComponent extends Component
{

	public function extensao($arquivoNome)
	{
		$extencao = explode('.', $arquivoNome);
		$extencao = end($extencao);

		return $extencao;
	}

	/**
	 * Upload de um arquivo qualquer.
	 * @access public
	 * @param $data -> Informações do arquivo contidos na variável $_FILES
	 * @param $nome -> Novo nome do arquivo sem a extensão
	 * @param $path -> Endereço de armazenado do arquivo.
	 * @return path do arquivo
	 */
	public function upload($data, $path, $name = false, $TH = false)
	{

		$i=1;
		
		$link = 'files/'.$path;

		# Caminho de onde será salvo
		$path = WWW_ROOT.'files/'.$path;

		# Caso a pasta não exista, cria
		if( !is_dir( $path ) )
		{
			mkdir($path);
		}

		$extencao = $this->extensao($data['name']);

		$TH = !empty($TH) ? '_TH' : '';

		/* Caso ja tenha enviado o nome para a imagem */
		if( !empty($name) )
		{
			$nome = $name.$TH;
		} 
		else 
		{
			$nome = time().mt_rand().mt_rand().$TH;
		}
		
		
		$link = $link.$nome.'.'.$extencao;

		$arquivo  = $path.$nome.'.'.$extencao;

		copy($data['tmp_name'], $arquivo);

		return array( 
			'arquivo' => $arquivo, 
			'nome_no_ext' => $nome,
			'nome'    => $data['name'],
			'link'    => $link 
		); 

	}	


	/**
	 * Upload/redimenciona uma imagem.
	 * @access public
	 * @param $data -> Informações do arquivo contidos na variável $_FILES.
	 * @param $nome -> Novo nome do arquivo sem a extensão.
	 * @param $path -> Endereço de armazenamento do arquivo.
	 * @param $largura -> Nova largura para a imagem.
	 * @param $altura -> Nova altura para a imagem.
	 * @return none 
	 */
	public function generateThumbnail($data, $path, $largura = 0, $altura = 0, $crop = null, $name = false)
	{
		$img = $this->upload($data, $path, $name, true);

		# Redimenciona as imagens
		App::import('Vendor', 'Gerenciador.Img', array('file' => 'Img.class.php'));
		$imgClass = new Img();

		$imgClass->carrega( $img['arquivo'] );

		if($imgClass->largura < $largura || $imgClass->altura < $altura)
		{
			// Remove a imagem
			unlink(WWW_ROOT.$img['link']);
			return false;
		}
		
		$imgClass->redimensiona( $largura, $altura, $crop );
		$imgClass->grava( $img['arquivo'], 85 );

		return $img;
	}




	public function fotoTemp($data)
	{
		$tmpFolder = WWW_ROOT.'files/';

		# Arquivo com nome random
		$file = 'tmp/'.rand(5, 999).'.jpg';

		# Path já com o arquivo na pasta de arqs temporários
		$finalPath = $tmpFolder.$file;

		# Copia o arquivo da tmp do servidor para a pasta de arquivos temporários
		copy( $data['tmp_name'], $finalPath );

		# Renderiza a classe de imagens
		App::import('Vendor', 'Gerenciador.Img', array('file' => 'Img.class.php'));
		$imgClass = new Img( $finalPath );	


		# Caso tenha mais de 1000 de largura, redimensiona proporcionalmente para 1000 x altura(proporcional)
		if( $imgClass->largura > 1000 )
		{
			$imgClass->redimensiona(1000);
		}

		# Grava a imagem na pasta temporária
		$imgClass->grava( $finalPath );

		# Retorna o nome do arquivo
		return $file;

	}


	/**
	* Cropa uma imagem no formato 940x360 para o destaque de topo
	*/
	public function uploadCoverPhoto($data, $pasta, $arquivo)
	{

			# Local onde a imagem será salva
			$path = WWW_ROOT.'files/fotos/'.$pasta.'/';
			
			# Caso a pasta não exista, cria
			if( !is_dir( $path ) )
			{
				mkdir($path);
			}

			# Arquivo com caminho completo
			$finalPath = $path.$arquivo.'.jpg';

			# Recebe o nome do arquivo temporario
			$fotoTmp = $data['Photo']['src'];
			$fotoTmp = WWW_ROOT.'files/'.$fotoTmp;

			# Carrega a imagem do temp
			App::import('Vendor', 'Gerenciador.Img', array('file' => 'Img.class.php'));
			$imgClass = new Img($fotoTmp);	

			# Posições do corte do crop
			$x = $data['Photo']['x'];
			$y = $data['Photo']['y'];

			# Largura do crop
			$w = round($data['Photo']['w']);
			# Altura do crop
			$h = round($data['Photo']['h']);

			# Cropa a imagem do temp
			$imgClass->resizeJcrop( $x, $y, $w, $h );

			# Redimensiona a imagem
			$imgClass->redimensiona(940,360);

			# Salva a imagem na pasta final
			$imgClass->grava($finalPath);

			return true;
	}



	/**
	 * @param $arquivo -> Informe o path do arquivo ou uma string para gerar o arquivo.
	 * @param $arquivo_nome -> Informe o nome do arquivo com sua respectiva extesão caso passe em $arquivo uma string.
	 */
	public function download($arquivo, $arquivo_nome = null)
	{
		# Caso seje um arquivo.
		if ( is_file($arquivo) )
		{
			# Calcula o tamanho do arquivo.
			$file_size = filesize($arquivo);
		}
		# Caso seje uma string
		else
		{
			# Calcula o tamanho do arquivo.
			$file_size = strlen($arquivo);
		}
		
		header('Content-type: octet/stream');
    	header('Content-disposition: attachment; filename='.$arquivo_nome.';');
    	header('Content-Length: '.$file_size);

    	if ( is_file($arquivo) )
		{
			readfile($arquivo);
		}
		else
		{
			echo $arquivo;
		}
	}

	/**
	* Valida o tamanho de uma imagem. Deleta a imagem caso seja inválida
	* @param $file: Caminho de onde está o arquivo
	* @param $largura: Largura da validação ( pixels )
	* @param $largura: Altura da validação ( pixels )
	* @param $tipo: Tipo de validação ( Tamanho mínimo ou máximo )
	* @return false caso seja inválida
	*/
	public function validaTamanho( $file, $largura, $altura, $tipo = 'max' )
	{
		App::import('Vendor', 'Gerenciador.Img', array('file' => 'Img.class.php'));
		$imgClass = new Img();
		$imgClass->carrega( $file );

		if ($tipo == 'max') {
			if( $imgClass->largura > $largura || $imgClass->altura > $altura )
			{
				unlink($file);
				return false;
			}
		}
		else
		{
			if( $imgClass->largura < $largura || $imgClass->altura < $altura )
			{
				unlink($file);
				return false;
			}
		}

		return true;
	}

	public function MultipleFiles($files)
	{
		$this->fixFilesArray($files);
		return $files;
	}

	/**
	* Reorganiza o array de $_FILES quando está utilizando o multiple upload
	* Ex: 
	* $files = $_FILES['filesToUpload'];
	*
	* // Organiza o array
	* $this->Arquivo->fixFilesArray($files);
	*
	* debug($files);
	*
	*/
	protected function fixFilesArray(&$files)
	{
	    $names = array( 'name' => 1, 'type' => 1, 'tmp_name' => 1, 'error' => 1, 'size' => 1);

	    foreach ($files as $key => $part) {
	        // only deal with valid keys and multiple files
	        $key = (string) $key;
	        if (isset($names[$key]) && is_array($part)) {
	            foreach ($part as $position => $value) {
	                $files[$position][$key] = $value;
	            }
	            // remove old key reference
	            unset($files[$key]);
	        }
	    }
	}	
}
?>