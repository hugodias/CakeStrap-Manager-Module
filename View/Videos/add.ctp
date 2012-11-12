<?php echo $this->element('breadcrumb',array('links' => array(
	array(
		'link' => '/gerenciador/videos',
		'label' => 'Vídeos'
	),
	array(
		'label' => 'Adicionar video'
	)
))) ?>

<div class="row-fluid">
	<div class="span12">
		<h2>Adicionar vídeo</h2>
		
	</div>
</div>

<hr>

<div class="row-fluid">
	<div class="span5">
		<form id="search-video">
			<h4>Coloque aqui a URL do video</h4>
			<input type="text" name="link_video"  class="span12" id="link_video" placeholder="Link do vídeo">
			<input type="submit" class="btn btn-primary" value="Procurar">		
		</form>

		<div class="check_buttons" style="display:none">
			<h3>É este o vídeo desejado?</h3>

			<?php  
			echo $this->Form->create
			(
				'Video',
				array
				(
					'url' => array
					(
						'plugin'	=> 'gerenciador',
						'controller'=> 'videos',
						'action'	=> 'add'
					),
					'inputDefaults' => array
					(
						'label' => false,
						'error' => false
					)
				)
			); 
			?>
			<?php echo $this->Form->input('link',array('type' => 'hidden','class' => 'id_video')) ?>
			<?php echo $this->Form->input('nome',array('type' => 'hidden','class' => 'nome_video')) ?>
			<?php echo $this->Form->input('thumbnail',array('type' => 'hidden','class' => 'thumb_video')) ?>
			<input type="submit" class="btn btn-success" value="Sim!">
			<input type="button" class="btn btn-danger error-button" value="Não!">
			<?php echo $this->Form->end() ?>
			
		</div>
	</div>
	<div class="span7">
		<div class="content-video">
			<div id="mascara" style="width:500px;height:500px;background:#FFF;z-index:999999;position:absolute"></div>
			<div id="videoDiv">Loading...</div>	
		</div>
	</div>
</div>


<script src="http://www.google.com/jsapi" type="text/javascript"></script>
<script type="text/javascript">
  google.load("swfobject", "2.1");
</script>    
