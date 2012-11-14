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
						// Cria o thumbnail
						$thumbnail = $this->Arquivo->generateThumbnail($file,'fotos/',218,163,'crop',$foto['nome_no_ext']);

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

			$this->Session->setFlash('Fotos cadastradas com sucesso.','flash_success');
			$this->redirect(array('action' => 'index'));
		}
	}

	public function edit($id = null)
	{
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

	public function view($id = null)
	{
	}
}
?>