<div id="base" alt="<?php echo "http://".$_SERVER['SERVER_NAME'].Router::url('/').$this->params->plugin?>"></div>
<div class="row-fluid">
	<div class="span10">
		<h2>Fotos</h2>
	</div>
	<div class="span2">
		<?php echo $this->Html->link(
			'Cadastrar fotos',
			array(
				'plugin' => 'gerenciador',
				'controller' => 'photos',
				'action' => 'add'
			),
			array(
				'class' => 'btn btn-primary',
				'style' => 'margin-top:20px;'
			)
		) ?>
	</div>
</div>

<hr>

<div class="row-fluid">
	<div class="span12">
		<a href="javascript:void(0)" class="btn btn-primary btn_selecionar_todas">
			<i class="icon-th icon-white"></i> 
			Selecionar todas</a>
		<a href="javascript:void(0)" class="btn btn-danger hide btn_delete_all">
			<i class="icon-remove icon-white"></i>
			Deletar</a>			
		<div class="fotos-selecionadas pull-right"><span><strong>0</strong></span> fotos selecionadas</div>
	</div>
</div>

<hr>

<div class="row-fluid">
	<div class="span12">
		<div class="alert">
		  <strong>Atenção!</strong> Para remover as fotos, clique em cima da foto para seleciona-la, depois clique em deletar
		</div>		
	</div>
</div>


<div class="row-fluid">
	<div class="span12">
		<ul id="sortable">
			<?php foreach ($photos as $photo): ?>
				<li class="ui-state-default" alt="<?php echo $photo['Photo']['id'] ?>" id="<?php echo $photo['Photo']['id'] ?>">
					<div class="thumbnail">
						<img src="<?php echo $this->params->webroot.$photo['Photo']['thumbnail'] ?>" alt="<?php echo $photo['Photo']['nome'] ?>" title="<?php echo $photo['Photo']['nome'] ?>" width="218px" height="163px">
					</div>
				</li>	
			<?php endforeach ?>
		</ul>		
	</div>
</div>