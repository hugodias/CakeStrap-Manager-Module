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
		<ul class="thumbnails">
			<?php $i=0; ?>
			<?php foreach ($photos as $photo): ?>

				<?php if ($i%4 == 0): ?>
					</ul>
					<ul class="thumbnails">
				<?php endif ?>
				<li class="span3">
	                <div class="thumbnail">
	                  <img src="<?php echo $this->params->webroot.$photo['Photo']['thumbnail'] ?>" alt="<?php echo $photo['Photo']['nome'] ?>" title="<?php echo $photo['Photo']['nome'] ?>" width="218px" height="163px">
	                  <div class="caption" style="text-align:center;">
	                    	<?php echo $this->Html->link('Remover',
	                    	array(
	                    		'plugin' => 'gerenciador',
	                    		'controller' => 'photos',
	                    		'action' => 'delete',
	                    		$photo['Photo']['id']
	                    	),
	                    	array(
	                    		'class' => 'btn btn-danger'
	                    	)) ?>
	                  </div>
	                </div>				
				</li>
				<?php $i++; ?>
			<?php endforeach ?>
		</ul>		
	</div>
</div>