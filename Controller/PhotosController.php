<?php
class PhotosController extends GerenciadorAppController
{
	public $uses = array('Gerenciador.Photo','Gerenciador.Product');
	public $components = array('Gerenciador.Arquivo');

	public function index()
	{
		$this->set('photos',$this->Photo->find('all'));
	}

	public function add()
	{
		if(!empty($_FILES))
		{
			$errors = array();

			// Organiza o array de multiple upload
			$files = $this->Arquivo->MultipleFiles( $_FILES['multipleFiles'] );
			
			// Abre cada array de arquivos
			foreach($files as $file) 
			{
				// Caso o arquivo seja válido
				if( $file['error'] == 0 )
				{
					// Faz o upload da foto no tamanho original
					if( $foto = $this->Arquivo->upload($file,'fotos/') )
					{
						// Verifica o tamanho mínimo para criar o thumbnail
						if( !$this->Arquivo->validaTamanho(
							$foto['link'],
							Configure::read('Gerenciador.photo_thumbnail_size.0'), // Width
							Configure::read('Gerenciador.photo_thumbnail_size.1'), // Height
							'min'						
							) )
						{
							array_push($errors,$foto['nome']);
						}
						else
						{							
							// Cria o thumbnail
							$thumbnail = $this->Arquivo->generateThumbnail(
								$file, // File
								'fotos/', // Pasta em que será salvo
								Configure::read('Gerenciador.photo_thumbnail_size.0'), // Width
								Configure::read('Gerenciador.photo_thumbnail_size.1'), // Height
								'crop', // Crop
								$foto['nome_no_ext']); // Nome do arquivo sem extensão

							// Salva os dados no banco
							$data = array(
								'Photo' => array(
									'nome' => $foto['nome'],
									'photo' => $foto['link'],
									'thumbnail' => $thumbnail['link'],
								)
							);
							$this->Photo->create();
							$this->Photo->save($data);						
						}
					}

				}
			}

			$this->Session->setFlash('Fotos cadastradas com sucesso.','flash_success');

			# Verifica se alguma imagem foi inválida
			if( count($errors) > 0 )
			{
				$message = '';

				foreach ($errors as $error) 
				{
					$message .= 'A imagem <strong>'.$error.'</strong> deve ter pelo menos '.Configure::read('Gerenciador.photo_thumbnail_size.0').'x'.Configure::read('Gerenciador.photo_thumbnail_size.1').'pixels. Upload cancelado.<br/>';
				}

				$this->Session->setFlash($message,'flash_fail');
			}

			$this->redirect(array('action' => 'index'));
		}
	}


	public function delete($id = null)
	{
		$this->Photo->id = $id;

		if (!$this->Photo->exists()) 
		{
			throw new NotFoundException('Foto inválida');
		}

		$foto = $this->Photo->read(null);

		unlink(WWW_ROOT.$foto['Photo']['photo']);
		unlink(WWW_ROOT.$foto['Photo']['thumbnail']);

		$this->Photo->delete();

		$this->Session->setFlash('Foto removida com sucesso','flash_success');
		$this->redirect(array('action' => 'index'));
	}

}
?>