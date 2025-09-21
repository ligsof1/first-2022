$(window).scroll(function() {
  // действия при скроллинге страницы...
  if ($(this).scrollTop()>800) {
    $('.heder1').fadeIn();
  } else {
    $('.heder1').fadeOut();
  }
});