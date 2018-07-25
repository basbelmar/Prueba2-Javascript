$(function() {
  // Handler for .ready() called.

  $('.card').on('click', function(e){
        $(this).toggleClass('card--open');
});

$('.card__like').click(function(e) {
  $(this).toggleClass('card__like--red');
          e.preventDefault();
          e.stopPropagation();
});

$('.card__follow-btn').click(function(e){
	  $(this).toggleClass('card__follow-btn--following');
	  e.preventDefault();
      e.stopPropagation();
});


//Imagen de la foto seleccionada en preview
$("#image").on("change", function(e){
$(".create__image img").attr("src", "assets/images/squared/" + $(this).val());
});



//Imagen del autor seleccionado en preview
$("#author").on("change", function(){
$(".create__profile img").attr("src", "assets/images/profiles/" + $(this).val());
});



});






