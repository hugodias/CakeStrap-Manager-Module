<?php 
App::uses('HtmlHelper', 'View/Helper');

/**
 * Extendendo as funcionalidades do HtmlHelper
 * 
 */
class GerenciadorHelper extends HtmlHelper {


	private $plugin;
	private $controller;
	private $action;


	var $helpers = array('Form');

	function __construct(View $View, $settings = array()) 
	{
		parent::__construct($View, $settings);
		$this->setVariables();
	}

  	public function setPlugin($plugin)
  	{
	    $this->plugin = $plugin;
	    return $this;
  	}

  	public function setController($controller)
  	{
	    $this->controller = $controller;
	    return $this;
  	}

  	public function setAction($action)
  	{
	    $this->action = $action;
	    return $this;
  	}

  	public function setVariables()
  	{
  		$this->setPlugin($this->params->plugin);
  		$this->setController($this->params->controller);
  		$this->setAction($this->params->action);
  	}
	
	public function create($model = null, $options = array())
	{
		$optionsDefault = array();
		$options = array_merge($optionsDefault, $options);
		return $this->Form->create($model, $options);
	}
	
	public function input($fieldName, $options = array())
	{
		$optionsDefault = array('class'=>'form-control','div'=>'form-group');
		$options = array_merge_recursive($optionsDefault, $options);
		if (sizeof($options['div']) > 1) {
			$options['div'] = join(' ',$options['div']);
		}
		return $this->Form->input($fieldName, $options);
	}

	public function textarea($fieldName, $options = array()) {
		$optionsDefault = array('class'=>'form-control');
		$options = array_merge_recursive($optionsDefault, $options);
		return $this->Form->textarea($fieldName, $options);
	}

	public function end($string ='Salvar',$options = array()) {
		
		$optionsDefault = array('class'=>'btn btn-form');
		$options = array_merge_recursive($optionsDefault, $options);

		$retorno  = $this->Form->submit($string,$options);
		$retorno .= $this->Form->end();
		return $retorno;
	}

}