$(function(){
  $('#hamburger').on('click', function(){
    $(this).toggleClass("open");
    $('header').toggleClass('expanded');
    $('header ul').toggleClass('active');
  });
});

$('#header_menu_ul a').on('click', function(){
  $('#hamburger').removeClass('open');
  $('header').removeClass('expanded');
  $('header ul').removeClass('active');
});