__webpack_require__.r(__webpack_exports__);
/* harmony default export */
__webpack_exports__["default"] = (function() {
    window.addEventListener("load", async () => {
        let video = document.querySelector("video[muted][autoplay]");
        try {
            await video.play();
        } catch (err) {
            video.controls = true;
        }
    });
});


//# sourceURL=webpack:///./assets/src/js/modules/video.js?