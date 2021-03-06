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

//Mobile menu
$('.menu__btn').click(function() {
  $('.menu').toggleClass('menu--opened');
  $('.menu__list').slideToggle();
})

$('.menu__subbtn').click(function() {
  $(this).next().slideToggle();
  $(this).toggleClass('menu__subbtn--opened');
})

//Footer menu
$('.footer__btn').click(function() {
  $(this).next().slideToggle();
  $(this).toggleClass('footer__btn--opened');
})

$('.tabs__like').click(function() {
  event.preventDefault();
  $(this).toggleClass('tabs__like--active');
})