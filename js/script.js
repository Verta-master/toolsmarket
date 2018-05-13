//Corner menu
$('.header__btn').click(function(e) {
  e.stopPropagation();
  $('.header__list').slideToggle();
  $('.header__menu').toggleClass('header__menu--opened');
})

//Login modal window
$('.header__enter').click(function(e) {
  event.preventDefault();
  e.stopPropagation();
  $('.modal').slideToggle();
  $('.header__enter').toggleClass('header__enter--opened');
})

//Hide popups on escape and click outside
$("body").click(function(){
  $('.header__list').slideUp();
  $('.header__menu').removeClass('header__menu--opened');
  $('.modal').slideUp();
  $('.header__enter').removeClass('header__enter--opened');
})

$("body").keydown(function(e) {
  if (e.keyCode == 27) {
    $('.header__list').slideUp();
    $('.header__menu').removeClass('header__menu--opened');
    $('.modal').slideUp();
    $('.header__enter').removeClass('header__enter--opened');
  }
})
