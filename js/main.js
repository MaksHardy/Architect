;
(function($) {
    $(function() {
        $('.hero__big-slider').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            fade: true,
            asNavFor: '.hero__small-slider'
        });
        $('.hero__small-slider').slick({
            slidesToShow: 5,
            slidesToScroll: 1,
            asNavFor: '.hero__big-slider',
            dots: true,
            centerMode: true,
            focusOnSelect: true
        });

    })
})(jQuery);
