let preloading = true;
setTimeout(() => {
    preloading = false;
}, 3000);

const hideLoading = () => {
    $('.loader-backdrop').animate({opacity: 0}, function () {
        $(this).hide('slow');
    });
}

const popup = (page, title, button, cls, url) => {
    $.alert({
        title: title,
        content: 'url:' + page + '.html',
        columnClass: 'col-md-12',
        backgroundDismiss: true,
        buttons: {
            viewProject: {
                isHidden: !button,
                text: button,
                action: () => {
                    window.open(url, '_blank');
                },
                btnClass: cls
            },
            close: { }
        }
    });
}

$(() => {
    $('.banner').ripples();
});

$(window).on('load', function(){
    if(!preloading) {
        hideLoading();
    } else {
        setTimeout(() => {
            hideLoading();
        }, 3000)
    }
});

$(document).on('click', '.click-me', () => {
    $('.body').animate({scrollTop: window.innerHeight - $('#nav').height()}, 0);
});

$(document).on('click', '.nav-link, .banner-container, #content', () => {
    $('.navbar-toggler:not(.collapsed)').trigger('click');
});
