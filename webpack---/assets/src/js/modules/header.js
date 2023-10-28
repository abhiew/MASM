__webpack_require__.r(__webpack_exports__);
/* harmony default export */
__webpack_exports__["default"] = (function() {
    var $ = jQuery;

    $(document).ready(function() {
        $(".menu-item-has-children > a").click(function(e) {
            e.preventDefault();
            $(this).closest(".menu-item-has-children").toggleClass("is-active");
        });

        $(document).on("keyup", function(e) {
            if (e.key == "Escape") {
                $("html").removeClass("has-menu-active");
                $(".menu-item-has-children").removeClass("is-active");
            }
        });

        $(".c-burger").click(function() {
            $("html").toggleClass("has-mobile-menu-active");
        });

        $(".c-mobile-menu_link.has-children").click(function() {
            $(this).closest(".c-mobile-menu_item").toggleClass("is-active");
        });
    });
});


//# sourceURL=webpack:///./assets/src/js/modules/header.js?