// noinspection JSJQueryEfficiency

let lastPage;

let ado = () => {
    $('.loader').css('animation', 'animFw 1s linear')
}

$(() => {
    $('.banner').ripples();
    load('home');
});

$(document).on('click', '.click-me', () => {
    $('html').animate({scrollTop: window.innerHeight - 70}, 0);
});

$(document).on('click', '.nav-link', (e) => {
    e.preventDefault();
    load($(e.target).data('page'), $(e.target).data('id'));
});

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

const load = (page, id) => {
    if(page !== 'home') {
        $('.banner-container').addClass('hide');
        $('body').removeClass('padding');
    } else {
        $('.banner-container').removeClass('hide');
        $('body').addClass('padding');
    }
    if(lastPage !== page) {
        $('#content').html('<div class="spinner-box"><div class="spinner-border" role="status"></div></div>');
        $.get(page + '.html', (data) => {
            $('#content').html(data);
            $('html, body').scrollTop($(id? '#' + id: 'body').offset().top);
            lastPage = page;
        });
    } else {
        $('html, body').animate({scrollTop: $(id? '#' + id: 'body').offset().top}, 0);
    }

}
