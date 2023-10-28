__webpack_require__.r(__webpack_exports__);
/* harmony default export */
__webpack_exports__["default"] = (function() {
    var $ = jQuery;

    $(document).ready(function() {
        $(".js-open-products-menu").click(function(e) {
            e.stopPropagation();
            $("html").toggleClass("has-menu-active");
        });

        $(document).click(function(e) {
            if (!$(e.target).is(".c-header, .c-header *, .c-menu, .c-menu *")) {
                $(".menu-item-has-children").removeClass("is-active");
                $("html").removeClass("has-menu-active");
            }
        });
    });
});


//# sourceURL=webpack:///./assets/src/js/modules/menu.js?