let preloading = true;

setTimeout(() => {
    preloading = false;
}, 3000);

const routeTo = () => {
    const href = window.location.href;
    const route = href.split("#")[1];
    if (route) {
        console.log(route);
        $('#' + route).trigger('click');
    }
}

const hideLoading = () => {
    $('.loader-backdrop').animate({opacity: 0}, function () {
        $(this).hide('slow', () => {
            routeTo();
        });
    });
}

const popup = (page, title, button, cls, url, github) => {
    $.alert({
        title: title,
        content: 'url:projects/' + page + '.html',
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
            github: {
                isHidden: !github,
                text: 'View on GitHub',
                action: () => {
                    window.open(github, '_blank');
                },
                btnClass: 'btn-github'
            },
            close: {}
        },
        onContentReady: () => {
            console.log($('.jconfirm-buttons').css({ display: 'flex', gap: '10px' }));
        }
    });

}

$(() => {
    $('.banner').ripples();
    console.log($(window).height());
    $('.section').css('minHeight', ($(window).height() - $('#nav').height()) + 'px')
});

$(window).on('load', function () {
    if (!preloading) {
        hideLoading();
    } else {
        setTimeout(() => {
            hideLoading();
        }, 3000)
    }
});

$(document).on('click', '.click-me', () => {
    $('.body').animate({scrollTop: window.innerHeight - $('#nav').height() + $('#about').height()}, 0);
});

$(document).on('click', '.nav-link, .banner-container, #content', () => {
    $('.navbar-toggler:not(.collapsed)').trigger('click');
});
