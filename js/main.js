$(document).ready(function () {

    /* =====================
       Smooth scroll + close mobile menu
    ===================== */
    $('a[href^="#"]').on('click', function (event) {
        if (this.hash !== "") {
            event.preventDefault();

            const hash = this.hash;
            const target = $(hash);

            if (target.length) {
                const headerHeight = $('.header').outerHeight();
                let targetOffset = target.offset().top - headerHeight;

                if (hash === '#footer') {
                    targetOffset = $(document).height() - $(window).height();
                }

                if (hash === '#header') {
                    targetOffset = 0;
                }

                $('html, body').stop().animate({
                    scrollTop: targetOffset
                }, 1000, 'swing', function () {
                    if ($('.mobile_menu').hasClass('show')) {
                        $('.mobile_menu').collapse('hide');
                    }
                });
            }
        }
    });

    /* =====================
       Materials section
    ===================== */
    $('.material-btn').on('click', function (e) {
        e.stopPropagation();
        const $card = $(this).closest('.material-card');

        $('.material-card').not($card).removeClass('active');
        $card.toggleClass('active');
    });

    $(document).on('click', function () {
        $('.material-card').removeClass('active');
    });

    $('.material-dropdown').on('click', function (e) {
        e.stopPropagation();
    });

    /* =====================
       Tariff currency
    ===================== */
    const RATE = 70;

    $('.tariff__currency-btn').on('click', function () {
        const $btn = $(this);
        const $card = $btn.closest('.tariff-card');
        const curr = $btn.data('curr');

        $card.find('.tariff__currency-btn').removeClass('active');
        $btn.addClass('active');

        $card.find('.old-price, .new-price').each(function () {
            const basePrice = parseFloat($(this).data('base-price'));

            if (curr === 'usd') {
                $(this).text('$' + Math.round(basePrice / RATE).toLocaleString('ru-RU'));
            } else {
                $(this).text(basePrice.toLocaleString('ru-RU') + ' ₽');
            }
        });
    });

    /* =====================
       FAQ
    ===================== */
    $('.faq-question').on('click', function () {
        const $answer = $(this).next('.faq-answer');

        $('.faq-answer').not($answer).slideUp(300);
        $('.faq-question').not(this).removeClass('active');

        $(this).toggleClass('active');
        $answer.slideToggle(300);
    });

    /* =====================
       Hero button scroll
    ===================== */
    $('.hero__btn-btn').on('click', function () {
        const target = $('#who-course');

        if (target.length) {
            const offset = target.offset().top - $('.header').outerHeight();

            $('html, body').animate({
                scrollTop: offset
            }, 1000);
        }
    });

});
