__webpack_require__.r(__webpack_exports__);
/* harmony default export */
__webpack_exports__["default"] = (function() {
    var $ = jQuery;

    /*
     * Replace all SVG images with inline SVG
     */
    $("img.js-svg").each(function() {
        var $img = $(this);
        var imgID = $img.attr("id");
        var imgClass = $img.attr("class");
        var imgURL = $img.attr("src");

        var request = $.get(
            imgURL,
            function(data) {
                // Get the SVG tag, ignore the rest
                var $svg = $(data).find("svg");

                // Add replaced image's ID to the new SVG
                if (typeof imgID !== "undefined") {
                    $svg = $svg.attr("id", imgID);
                }
                // Add replaced image's classes to the new SVG
                if (typeof imgClass !== "undefined") {
                    $svg = $svg.attr("class", imgClass + " replaced-svg");
                }

                // Remove any invalid XML tags as per http://validator.w3.org
                $svg = $svg.removeAttr("xmlns:a");

                // Replace image with new SVG
                $img.replaceWith($svg);

                if ($svg.hasClass("js-stroke")) {
                    var $paths = $svg.find("path");

                    $paths.each(function() {
                        var $path = $(this);
                        var path = $path[0];
                        path.style.setProperty("--stroke-length", path.getTotalLength() + "px");
                    });
                }
            },
            "xml"
        );

        request.always(function() {
            $("html").addClass("has-svg-ready");
        });
    });
});


//# sourceURL=webpack:///./assets/src/js/modules/svg.js?