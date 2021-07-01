$(function () {
    console.log($('.banner').ripples());
    $('.click-me').on('click', () => {
        $('html, body').animate({scrollTop: $('.banner').height()}, 0);
    })
})
