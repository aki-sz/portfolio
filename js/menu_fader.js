$(document).ready(function () {
    var sideMenu = $('#side_menu');
    var footer = $('footer');

    $(window).on('scroll resize', function () {
        var windowBottom = $(window).scrollTop() + $(window).height();
        var footerTop = footer.offset().top;
        console.log('windowBottom:', windowBottom, 'footerTop:', footerTop);

        if (windowBottom >= footerTop) {
            sideMenu.fadeOut();
        } else {
            sideMenu.fadeIn();
        }
    });

    $(window).trigger('scroll');
});