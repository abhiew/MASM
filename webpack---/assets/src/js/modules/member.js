__webpack_require__.r(__webpack_exports__);
/* harmony default export */
__webpack_exports__["default"] = (function() {
    var $ = jQuery;

    init();
    $(window).resize(function() {
        init();
    });


    /**
     * Add description below team img
     */
    $(".c-member_icon").click(function() {

        var $component = $(this).closest(".c-member");

        var isActive = $component.hasClass('isactive');

        $(".c-member").removeClass("isactive");

        if (!isActive) {
            $component.addClass("isactive");
        }

    });


    function init() {
        jQuery(".c-member").each(function() {
            var $component = jQuery(this);
            var $body = jQuery(this).find(".c-member_body");

            $component[0].style.setProperty("--height", $body.outerHeight() + "px");

        });
    }

});


//# sourceURL=webpack:///./assets/src/js/modules/member.js?