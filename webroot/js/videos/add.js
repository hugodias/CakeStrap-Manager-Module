$(function(){

	$('#search-video').submit(function(){
		var url,ID;
    url = $('#link_video').val();
    ID = youtube_parser(url);

    if( ID ) {
      // Remove a mascara branca
      showVideo();

      // Faz o load do video e mostra na tela
      loadVideo(ID);

      // Mostra os botões de decisão
      $('.check_buttons').show();

      // Coloca o ID do video no input hidden
      $('.id_video').val(ID);

      // Pega as informações do video no youtube via JSON
      getVideoInfo(ID,function(data){
        $('.nome_video').val(data.title);
        $('.thumb_video').val(data.thumbnail.hqDefault);
      });
    } else {
      alert('URL inválida');
      $('#link_video').val('').focus();
    }


		return false;
	});

  $('.error-button').live('click',function(){
    $('.check_buttons').hide();
    $('.id_video').val('');
    $('.nome_video').val('');
    $('.thumb_video').val('');
    $('#link_video').val('').focus();
    hideVideo();
  });
});


function hideVideo(){
  $('#mascara').fadeIn(500);
  ytplayer.pauseVideo();
}

function getVideoInfo (ID, callback) {
  return $.getJSON('http://gdata.youtube.com/feeds/api/videos/'+ID+'?v=2&alt=jsonc',function(data,status,xhr){
      callback(data.data);
  });
}

function showVideo() {
  $('#mascara').delay(500).fadeOut(500);
}
// Update a particular HTML element with a new value
function updateHTML(elmId, value) {
  document.getElementById(elmId).innerHTML = value;
}

// Loads the selected video into the player.
function loadVideo(id) {
  if(ytplayer) {
    ytplayer.loadVideoById(id);
  }
}

function youtube_parser(url){
    var regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#\&\?]*).*/;
    var match = url.match(regExp);
    if (match&&match[7].length==11){
        return match[7];
    }else{
        return false;
    }
}

// This function is called when an error is thrown by the player
function onPlayerError(errorCode) {
  alert("An error occured of type:" + errorCode);
}

// This function is automatically called by the player once it loads
function onYouTubePlayerReady(playerId) {
  ytplayer = document.getElementById("ytPlayer");
  ytplayer.addEventListener("onError", "onPlayerError");
}

// The "main method" of this sample. Called when someone clicks "Run".
function loadPlayer() {
  // The video to load
  var videoID = "ylLzyHk54Z0"
  // Lets Flash from another domain call JavaScript
  var params = { allowScriptAccess: "always" };
  // The element id of the Flash embed
  var atts = { id: "ytPlayer" };
  // All of the magic handled by SWFObject (http://code.google.com/p/swfobject/)
  swfobject.embedSWF("http://www.youtube.com/v/" + videoID + 
                     "?version=3&enablejsapi=1&playerapiid=player1", 
                     "videoDiv", "480", "295", "9", null, null, params, atts);
}
function _run() {
  loadPlayer();
}
google.setOnLoadCallback(_run);