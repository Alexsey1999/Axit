new WOW({ mobile: false }).init();

$(function() {

  $(".tabs").tabs();

  $('.burger').on('click', function() {
    $(this).toggleClass('burger-active')
    $('.header__menu').slideToggle()
  })

});
