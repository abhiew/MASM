__webpack_require__.r(__webpack_exports__);
/* harmony default export */
__webpack_exports__["default"] = (function() {
    var $ = jQuery;

    $(document).ready(function() {
        var $carousels = jQuery(".o-carousel");

        $carousels.each(function() {
            var $carousel = jQuery(this);

            $carousel.on("staticClick.flickity", function(event, pointer, cellElement, cellIndex) {
                $carousel.flickity("select", cellIndex);
            });
        });

        jQuery(".o-carousel_btn.-prev").on("click", function() {
            var carouselID = jQuery(this).parent(".o-carousel_actions").data("carousel-for");
            var $carousel = jQuery('.o-carousel[data-carousel-id="' + carouselID + '"]');
            $carousel.flickity("previous");
            $carousel.flickity("stopPlayer");
        });

        jQuery(".o-carousel_btn.-next").on("click", function() {
            var carouselID = jQuery(this).parent(".o-carousel_actions").data("carousel-for");
            var $carousel = jQuery('.o-carousel[data-carousel-id="' + carouselID + '"]');
            $carousel.flickity("next");
            $carousel.flickity("stopPlayer");
        });
    });

    $(window).on("load", function() {
        var $carousel = jQuery(".o-carousel");
        $carousel.flickity("resize");
    });
});


//# sourceURL=webpack:///./assets/src/js/modules/carousel.js?