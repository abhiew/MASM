__webpack_require__.r(__webpack_exports__);
/* harmony default export */
__webpack_exports__["default"] = (function() {
    jQuery(".c-file input").change(function() {
        var $file = jQuery(this).closest(".c-file");
        var filename = jQuery(this)
            .val()
            .replace(/C:\\fakepath\\/i, "");
        var filesize = jQuery(this)[0].files[0].size;
        $file.find(".c-file_info").remove();
        $file.append('<div class="c-file_document"></span><div class="c-file_info"><span class="c-file_name">' + filename + '</span><span class="c-file_size">' + filesize / 1000 + ' ko</div><span class="c-file_clear"></span></div>');
    });

    jQuery(document).on("click", ".c-file_clear", function() {
        var $file = jQuery(this).closest(".c-file");
        $file.find(".c-file_document").remove();
        $file.find("input").val("");
    });
});


//# sourceURL=webpack:///./assets/src/js/modules/file.js?