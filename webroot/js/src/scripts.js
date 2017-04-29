/**
* This is your App script template. Is already working, all you need to do it build your functions and play :)
* Here you can already use Jquery, Modernizr and Bootstrap.js
*/
;((() => {
  var App;
  var __bind = (fn, me) => function(...args) { return fn.apply(me, args); };

  App = ((() => {
  	// Constructor
    function App() {
      this.initialize();
    }

    App.prototype.initialize = function() {
      this.plugins();
    }

    App.prototype.plugins = () => {

      if( $(".fancybox-media").length > 0 ) {
        $(".fancybox-media").fancybox({
          maxWidth  : 800,
          maxHeight : 600,
          fitToView : false,
          width   : '70%',
          height    : '70%',
          autoSize  : false,
          closeClick  : false,
          openEffect  : 'none',
          closeEffect : 'none'
        });
      }

      if( $('a[rel=groupFancy]').length > 0 ) {
        $('a[rel=groupFancy]').fancybox();  
      }
      
    }

    return App;

  }))();

  $(() => App = new App());
})).call(this);