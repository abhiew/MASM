__webpack_require__.r(__webpack_exports__);
/* harmony default export */
__webpack_exports__["default"] = (function() {
    var $ = jQuery;

    window.requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame;

    requestAnimationFrame(animate);

    function animate() {
        $(".c-marquee").each(function() {
            var $marquee = $(this);
            var marqueeEl = $marquee[0];
            var marqueeOffset = $marquee.offset().left;
            var sentenceWidth = $(this).find(".c-marquee_text").outerWidth() / 3;

            if (marqueeOffset <= -sentenceWidth) {
                marqueeEl.style.animation = "none";
                marqueeEl.offsetHeight; /* trigger reflow */
                marqueeEl.style.animation = null;
            }
        });
        requestAnimationFrame(animate);
    }
});


//# sourceURL=webpack:///./assets/src/js/modules/marquee.js?