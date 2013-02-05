$(function(){
  var photosArr = Array();
  var selected = false;  
  var BASE_URL = $('#base').attr('alt');
  $thumbnail = $('#sortable');

  $( "#sortable" ).sortable({
    opacity: 0.5,
    update: function(event,ui) {
      saveOrder();
    }
  });
  $( "#sortable" ).disableSelection();


  $('.btn_selecionar_todas').click(function(){
    // Limpa o array
    photosArr = Array();

    $.each($thumbnail.children('li'),function(){
      var id = $(this).attr('alt');

      // Adiciona o id da foto
      photosArr.push(id);

      // Marca o thumbnail como marcado ou não
      if (!selected) {
        $(this).children('.thumbnail').addClass('selected');
      } else {
        $(this).children('.thumbnail').removeClass('selected');
      }
      
    });

    selected = selected ? false : true;

    if (selected) {
      selected = true;
      showDeleteButton();
    } else {
      photosArr = Array();
      showDeleteButton();
      selected = false;
    }
    console.log(photosArr);

    // Muda numero de fotos selecionadas
    countPhotos();
  });

  // Adiciona o ID da foto no array de fotos a excluir
  $thumbnail.children('li').click(function(){
    var id = $(this).attr('alt');
    var index = photosArr.indexOf(id);

    if(index!=-1){
      // Remove a foto do array
      photosArr.splice(index, 1);
      // Remove a classe selecionada
      $(this).children('.thumbnail').removeClass('selected');         
    } else {
      // Adiciona a foto no array
      photosArr.push(id);
      // Adiciona a classe selecionada
      $(this).children('.thumbnail').addClass('selected');
    }

    console.log(photosArr);
    // Muda numero de fotos selecionadas
    countPhotos();    

    // Mostra ou esconde o botão de remover
    showDeleteButton();
  });

  $('.btn_delete_all').click(function(){
    var photos;
    
    if ( confirm_delete() ) {

      // Converte o array em uma string com os valores separados por virgula
      photos = photosArr.join(",");

      // Envia o array com as fotos selecionadas para remover
      $.post(BASE_URL + '/photos/delete_all',{
        photos: photos
      }, function(response){
        // Esconde as fotos
        hideDeletedPhotos();

        // Limpa o array
        photosArr = Array();

        // Esconde o botao de deletar
        showDeleteButton();

        // Troca a label do numero de fotos selecionadas
        countPhotos();
      });
    } 

  });


  function confirm_delete() {
    var r = confirm("Deseja realmente remover " + photosArr.length + " fotos?")
    if (r==true) {
      return true;
    } else {
      return false;
    }

    return false;
  }

  function countPhotos() {
    var count = photosArr.length;
    $('.fotos-selecionadas').children('span').children('strong').html(count);
  }

  function showDeleteButton() {
    if (photosArr.length === 0) {
      $('.btn_delete_all').hide();
    } else {
      $('.btn_delete_all').show();
    }
  }

  function hideDeletedPhotos() {
    $.each($('#sortable').children('li'), function(){
      var id = $(this).attr('alt');
      if( photosArr.indexOf(id) != -1 ) {
        $(this).hide(300);
      }
    })
  }

  function saveOrder() {
    var sorted = $( "#sortable" ).sortable( "toArray" ).join(",");
    $.post(BASE_URL + '/photos/sort',{
      order: sorted
    },function(response){
      // Refresh na pagina ao ordenar
      //window.location.reload();
    });  
  }  
});