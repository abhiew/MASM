__webpack_require__.r(__webpack_exports__);
/* harmony default export */
__webpack_exports__["default"] = (function() {
    var $ = jQuery;

    const scroll = new LocomotiveScroll({
        el: document.querySelector("[data-scroll-container]"),
        smooth: true,
    });

    var lastScrollTop = 0;

    scroll.on("scroll", (obj) => {
        var scrollY = Math.round(obj.scroll.y);

        $("html").removeClass("has-menu-active");
        $(".menu-item-has-children").removeClass("is-active");

        if (scrollY > 96) {
            if (scrollY > lastScrollTop) {
                jQuery("html").removeClass("header-is-active");
            } else if (scrollY < lastScrollTop) {
                jQuery("html").addClass("header-is-active");
            }
        }

        if (scrollY > $(window).outerHeight()) {
            jQuery("html").addClass("header-is-over-content");
        } else {
            jQuery("html").removeClass("header-is-over-content");
        }

        lastScrollTop = Math.round(obj.scroll.y);
    });

    // Update scroll when window height changes
    const resizeObserver = new ResizeObserver((entries) => scroll.update());

    // start observing a DOM node
    resizeObserver.observe(document.body);
});


//# sourceURL=webpack:///./assets/src/js/modules/smooth-scroll.js?