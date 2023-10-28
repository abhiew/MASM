__webpack_require__.r(__webpack_exports__);
/* harmony default export */
__webpack_exports__["default"] = (function() {
    var $ = jQuery;

    $(document).ready(function() {
        calcSizes();
    });

    $(window).on("load", function() {
        calcSizes();
    });

    $(window).resize(function() {
        calcSizes();
    });

    function calcSizes() {
        $(".c-stepper_description").each(function() {
            var height = $(this).find("p").outerHeight();
            $(this).css("height", height + "px");
        });
    }
});


//# sourceURL=webpack:///./assets/src/js/modules/stepper.js?