//Corner menu
$('.header__btn').click(function() {
  $('.header__list').slideToggle();
  $('.header__menu').toggleClass('header__menu--opened');
})