# CakeStrap Modulo Gerenciador v 0.1 Alpha
---
Modulo gerenciador para o [cakeStrap][]
[cakeStrap]: https://github.com/hugodias/cakeStrap


## Começando

1. Clone ou faça o download do Gerenciador e coloque na pasta: `app/Plugin/Gerenciador`
2. Vá até `app/Config/bootstrap.app` e inclua o plugin em sua aplicação <pre>
CakePlugin::load(array(
	'Gerenciador' => array(
		'bootstrap' => true,
		'routes' => true
		)));
</pre>
3. Cria um banco de dados com a seguinte estrutura:<pre>CREATE TABLE IF NOT EXISTS `photos` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nome` varchar(255) NOT NULL,
  `photo` varchar(255) NOT NULL,
  `thumbnail` varchar(255) NOT NULL,
  `order` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=37 ;</pre><pre>CREATE TABLE IF NOT EXISTS `videos` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nome` varchar(255) NOT NULL,
  `link` varchar(255) NOT NULL,
  `thumbnail` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=18 ;</pre>


### Funcionalidades

##### Fotos
2. Galeria de fotos
3. Ordenação de fotos
3. Multiple photo upload
4. Thumbnails


##### Videos
1. Inclusão de vídeos do youtube por link
2. Sugestões de vídeos ( em desenvolvimento )
3. Armazenamento das informações do video no banco de dados automaticamente ( Link, Nome, Thumbnail )


## Dúvidas / Bugs

Tem alguma dúvida ou achou algum bug? Crie uma issue [aqui][] no GitHub!
[aqui]: https://github.com/hugodias/cakestrap_gerenciador_module/issues