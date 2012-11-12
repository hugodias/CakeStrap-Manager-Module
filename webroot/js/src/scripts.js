/**
* This is your App script template. Is already working, all you need to do it build your functions and play :)
* Here you can already use Jquery, Modernizr and Bootstrap.js
*/
;(function() {
  var App,
    __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };

  App = (function() {
  	// Constructor
    function App() {
      this.initialize();
    }

    App.prototype.initialize = function() {
      this.plugins();
    }

    App.prototype.plugins = function() {

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

  })();

  $(function() {
    return App = new App();
  });

}).call(this);