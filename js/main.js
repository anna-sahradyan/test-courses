$(document).ready(function() {
    $('a[href^="#"]').on('click', function(event) {
        if (this.hash !== "") {
            event.preventDefault();

            var hash = this.hash;
            var target = $(hash);

            if (target.length) {
                var headerHeight = $('.header').outerHeight();

                var targetOffset = target.offset().top - headerHeight;

                if (hash === '#footer') {
                    targetOffset = $(document).height() - $(window).height();
                }
                if (hash === '#header') {
                    targetOffset = 0;
                }

                $('html, body').stop().animate({
                    scrollTop: targetOffset
                }, 1000, 'swing');
            }
        }
    });
});
/*materials section*/

$(document).ready(function() {
    $('.material-btn').on('click', function(e) {
        e.stopPropagation();
        const $card = $(this).closest('.material-card');

        $('.material-card').not($card).removeClass('active');
        $card.toggleClass('active');
    });
    $(document).on('click', function() {
        $('.material-card').removeClass('active');
    });

    $('.material-dropdown').on('click', function(e) {
        e.stopPropagation();
    });
});

/*tariff*/
$(document).ready(function () {
    const RATE = 70;

    $('.tariff__currency-btn').on('click', function () {
        const $clickedButton = $(this);
        const $parentCard = $clickedButton.closest('.tariff-card');
        const selectedCurr = $clickedButton.data('curr');
        $parentCard.find('.tariff__currency-btn').removeClass('active');
        $clickedButton.addClass('active');
        $parentCard.find('.old-price, .new-price').each(function () {
            const $priceSpan = $(this);
            const basePrice = parseFloat($priceSpan.attr('data-base-price'));

            if (selectedCurr === 'usd') {
                const usdValue = Math.round(basePrice / RATE);
                $priceSpan.text('$' + usdValue.toLocaleString('ru-RU'));
            } else {
                $priceSpan.text(basePrice.toLocaleString('ru-RU') + ' ₽');
            }
        });
    });
});
/*FAQ*/
$(document).ready(function() {
    $('.faq-question').on('click', function() {
        const answer = $(this).next('.faq-answer');
        $('.faq-answer').not(answer).slideUp(300);
        $('.faq-question').not(this).removeClass('active');

        $(this).toggleClass('active');

        answer.slideToggle(300);
    });
});
/**/
$(document).ready(function() {
    $('.hero__btn-btn').on('click', function() {
        const target = '#who-course';
        if ($(target).length) {
            const headerHeight = $('.header').outerHeight();
            const targetOffset = $(target).offset().top - headerHeight;

            $('html, body').animate({
                scrollTop: targetOffset
            }, 1000);
        }
    });
});