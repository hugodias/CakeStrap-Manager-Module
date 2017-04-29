/**
* This script is automatically called when the user is in the controller 'users' and action 'home'
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
      // Allow to delete users using twitter bootstrap modal
      this.deleteUserModal();
    }

    // Delete users modal
    App.prototype.deleteUserModal = () => {

      // Changes the URL to delete on each user click
      $('.btn-remove-modal').bind('click',function(e) {
        var uid;
        var name;
        var href;
        var pattern;
        var $label;
        var $link;

        $label  = $('.label-uname');
        $link   = $('.delete-user-link');
        uid     = $(this).attr('data-uid');
        name    = $(this).attr('data-uname');
        href    = $link.attr('href');
        pattern = /\d+$/g;

        // Find the last ID in URL
        aux     = href.replace(pattern,uid);

        $link.attr('href', aux );

        // Changes modal label
        $label.html(name);
      });
    }

    return App;

  }))();

  $(() => App = new App());
})).call(this);