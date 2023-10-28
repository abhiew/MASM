__webpack_require__.r(__webpack_exports__);
/* harmony default export */
__webpack_exports__["default"] = (function() {
    var $ = jQuery;

    $(document).ready(function() {
        $("[data-modal-trigger]").click(function(e) {
            e.stopPropagation();
            var id = $(this).data("modal-trigger");
            $('[data-modal-id="' + id + '"]').toggleClass("is-active");
        });

        $(".c-modal_clear").click(function() {
            $(this).closest(".c-modal").removeClass("is-active");
        });

        $(document).on("keyup", function(e) {
            if (e.key == "Escape") {
                $(".c-modal").removeClass("is-active");
            }
        });

        $(document).click(function(e) {
            if (!$(e.target).is(".c-modal_inner, .c-modal_inner *")) {
                $(".c-modal").removeClass("is-active");
            }
        });
    });
});


//# sourceURL=webpack:///./assets/src/js/modules/modal.js?