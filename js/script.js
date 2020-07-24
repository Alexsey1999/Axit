$(function() {

  $(".tabs").tabs();

  $('.burger').on('click', function() {
    $('.header__menu').slideToggle()
  })

});
