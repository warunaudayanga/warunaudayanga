$(() => {
    $('.banner').ripples();
    $(document).scroll(() => {
        if ($(this)[0].scrollY >= $('.banner').height() - 70) $('.navbar-container').addClass('scrolled');
        else $('.navbar-container').removeClass('scrolled');
    });
});

$(document).on('click', '.click-me', () => {
    $('html').animate({scrollTop: window.innerHeight - 70}, 0);
});
