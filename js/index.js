// noinspection JSJQueryEfficiency

let lastPage;

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
