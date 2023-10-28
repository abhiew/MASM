__webpack_require__.r(__webpack_exports__);
/* harmony default export */
__webpack_exports__["default"] = (function() {
    var $ = jQuery;

    window.addEventListener("beforeunload", function(event) {
        var activeElementHref = event.target.activeElement.href;
        if (activeElementHref && !activeElementHref.includes("tel:") && !activeElementHref.includes("mailto:")) {
            $("html").addClass("is-unloading");
            setTimeout(() => {
                $("html").removeClass("is-unloading");
            }, 5000);
        }
    });
});


//# sourceURL=webpack:///./assets/src/js/modules/curtain.js?