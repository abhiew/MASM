__webpack_require__.r(__webpack_exports__);
/* harmony default export */
__webpack_exports__["default"] = (function() {
    var $ = jQuery;

    if (getCookie("cookies") == null) {
        setTimeout(function() {
            jQuery(".c-cookies").addClass("is-active");
        }, 3000);
    }
    jQuery(".c-cookies_clear").click(function() {
        jQuery(this).closest(".c-cookies").removeClass("is-active");
        document.cookie = "cookies=closed; path=/";
    });

    jQuery(".c-cookies_accept").click(function() {
        jQuery(this).closest(".c-cookies").removeClass("is-active");
        document.cookie = "cookies=closed; path=/";
    });

    function getCookie(name) {
        var dc = document.cookie;
        var prefix = name + "=";
        var begin = dc.indexOf("; " + prefix);
        if (begin == -1) {
            begin = dc.indexOf(prefix);
            if (begin != 0) return null;
        } else {
            begin += 2;
            var end = document.cookie.indexOf(";", begin);
            if (end == -1) {
                end = dc.length;
            }
        }
        // because unescape has been deprecated, replaced with decodeURI
        //return unescape(dc.substring(begin + prefix.length, end));
        return decodeURI(dc.substring(begin + prefix.length, end));
    }
});


//# sourceURL=webpack:///./assets/src/js/modules/cookies.js?