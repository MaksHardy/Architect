;
(function($) {
    $(function() {
        $('.hero__big-slider-wrap').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            fade: true,
            adaptiveHeight: true,
            asNavFor: '.hero__small-slider'
        });
        $('.hero__small-slider').slick({
            slidesToShow: 5,
            slidesToScroll: 1,
            asNavFor: '.hero__big-slider-wrap',
            dots: false,
            centerMode: true,
            focusOnSelect: true,
            arrows: false,
            autoplay: true,
            autoplaySpeed: 2000,
        });

    })
    $('.grid').masonry({
        itemSelector: '.grid-item',
        columnWidth: 370,
        gutter: 30

    });
    $("[data-fancybox]").fancybox({
        scrolling: 'yes',
        speed: 500,
    });
})(jQuery);
