$('.koumoku li').hover(
  function() {
    $(this).find('p').addClass('top');
    $(this).find('img').addClass('top');
  },
  function() {
    $(this).find('p').removeClass('top');
    $(this).find('img').removeClass('top');
  }
);