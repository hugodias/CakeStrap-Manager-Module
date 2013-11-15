<?php 
App::uses('HtmlHelper', 'View/Helper');

/**
 * Extendendo as funcionalidades do HtmlHelper
 * 
 */
class GerenciadorHelper extends HtmlHelper {


	public $pluginPath;
	public $controller;
	public $action;


	var $helpers = array('Form');

	function __construct(View $View, $settings = array()) 
	{
		parent::__construct($View, $settings);
		$this->setVariables();
	}
/**
* Seta o caminho relativo do Plugin
*
*/
  	public function setPlPath($pluginPath)
  	{
	    return $this->pluginPath = $pluginPath;
  	}
/**
* Seta o controller da pagina
*
*/
  	public function setController($controller)
  	{
	    return $this->controller = $controller;
	    
  	}
/**
* Seta a action da pagina
*
*/
  	public function setAction($action)
  	{
	    return $this->action = $action;
  	}

/**
*	Seta as variaveis iniciais do Helper para persistirem
*
*/
  	public function setVariables()
  	{	
  		$this->setPlPath(App::pluginPath(Inflector::humanize($this->params->plugin)));
  		$this->setController($this->params->controller);
  		$this->setAction($this->params->action);
  	}


  	public function automaticScript()
  	{
  		# CSS Plugin Path
		$js_path = $this->pluginPath . WEBROOT_DIR . DS . JS_URL;
	  	if (is_file($js_path . $this->controller . DS . $this->action . '.js')) {
	    	return $this->script($this->plugin.'.'.$this->controller . '/' . $this->action);
	  	}
		return false;
  	}

  	public function automaticCss()
  	{
  		# CSS Plugin Path
		$css_path = $this->pluginPath . WEBROOT_DIR . DS . CSS_URL;
	  	if (is_file($css_path . $this->controller . DS . $this->action . '.css')) {
	    	return $this->css($this->plugin.'.'.$this->controller . '/' . $this->action);
	  	}
		return false;
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