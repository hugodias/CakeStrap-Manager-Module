<?php  
class VideosController extends GerenciadorAppController
{
	public function index()
	{
		$this->set('videos',$this->Video->find('all'));
	}

	public function add()
	{
		if ($this->request->is('post')) 
		{
			if( $this->Video->save($this->request->data) )
			{
				$this->Session->setFlash('Video adicionado com sucesso','flash_success');
				$this->redirect(array('action' => 'index'));
			}
		}
	}

	public function delete($id = null)
	{
		$this->Video->id = $id;

		if (!$this->Video->exists()) 
		{
			throw new NotFoundException('Video inválido');
		}

		if( $this->Video->delete() )
		{
			$this->Session->setFlash('Video removido com sucesso','flash_success');
		}

		$this->redirect(array('action' => 'index'));
	}
}
?>