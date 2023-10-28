__webpack_require__.r(__webpack_exports__);
/* harmony default export */
__webpack_exports__["default"] = (function() {
    var $ = jQuery;

    $(document).ready(function() {
        var $carousel = jQuery(".js-fade-out-of-view");
        var $cells = $carousel.find(".o-carousel_cell");
        var flkty = $carousel.data("flickity");

        $carousel.on("scroll.flickity", function() {
            flkty.slides.forEach(function(slide, i) {
                // get the cell
                var cell = $cells.get(i);
                // get the cell x offset from the start of the carousel
                var x = slide.target + flkty.x;
                var per = x / slide.outerWidth;

                per = per + 1;
                per = per.toFixed(2);
                // double the fade out speed
                per = per * 2;
                per = per - 1;

                cell.style.opacity = per;
            });
        });
    });
});


//# sourceURL=webpack:///./assets/src/js/modules/carousel-fade-out.js?