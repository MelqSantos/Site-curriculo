$(window).on('load', function() {
    $('#preloader .inner').fadeOut();
    $('#preloader').delay(450).fadeOut('slow');
    $('body').delay(450).css({ 'overflow': 'visible' });
})