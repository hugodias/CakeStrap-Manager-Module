<div class="row-fluid">
	<div class="span10">
		<h2>Videos</h2>	
	</div>
	<div class="span2">
		<?php echo $this->Html->link('Cadastrar video',
		array(
			'plugin' => 'gerenciador',
			'controller' => 'videos',
			'action' => 'add'
		),
		array(
			'class' => 'btn btn-primary'
		)) ?>
	</div>
</div>
<hr>
<div class="row-fluid">
	<div class="span12">
		<ul class="thumbnails">
			<?php $i=0; ?>
			<?php foreach ($videos as $video): ?>

				<?php if ($i%4 == 0): ?>
					</ul>
					<ul class="thumbnails">
				<?php endif ?>
				<li class="span3">
	                <div class="thumbnail" style="height:350px">
	                  <img src="<?php echo $video['Video']['thumbnail'] ?>" alt="<?php echo $video['Video']['nome'] ?>" title="<?php echo $video['Video']['nome'] ?>" width="218px" height="163px">
	                  <div class="caption" style="text-align:center;">
	                  		<hr>
	                  		<h6><?php echo $video['Video']['nome'] ?></h6>
	                  		<hr>
	                    	<?php echo $this->Html->link('Remover',
	                    	array(
	                    		'plugin' => 'gerenciador',
	                    		'controller' => 'videos',
	                    		'action' => 'delete',
	                    		$video['Video']['id']
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