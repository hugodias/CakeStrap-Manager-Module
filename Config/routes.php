<?php  
Router::connect('/gerenciador', 
	array(
		'plugin' => 'gerenciador',
		'controller' => 'photos', 
		'action' => 'index'));
?>