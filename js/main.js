;
(function($) {
    $(function() {
        // $('.hero__big-slider').slick({
        //     slidesToShow: 1,
        //     slidesToScroll: 1,
        //     arrows: false,
        //     fade: true,
        //     adaptiveHeight: false,
        //     asNavFor: '.hero__small-slider'
        // });
        $('.hero__small-slider').slick({
            slidesToShow: 5,
            slidesToScroll: 1,
            asNavFor: '.hero__big-slider',
            dots: false,
            centerMode: true,
            focusOnSelect: true,
            arrows: false,
        });

    })
    $('.grid').masonry({
        itemSelector: '.grid-item',
        columnWidth: 370,
        gutter: 30

    });
    $("[data-fancybox]").fancybox({
        // Options will go here
    });
})(jQuery);
