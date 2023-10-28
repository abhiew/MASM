__webpack_require__.r(__webpack_exports__);
/* harmony default export */
__webpack_exports__["default"] = (function() {
    var $ = jQuery;

    /**
     * Initializes the accordion when the window has been loaded.
     */
    $(window).on("load", function() {
        initAccordion();
    });

    /**
     * Initializes the accordion when the window resizes.
     */
    $(window).resize(function() {
        initAccordion();
    });

    /**
     * Initializes the accordion.
     */
    function initAccordion() {
        $(".c-accordion").each(function() {
            var $component = $(this);
            var $body = $(this).find(".c-accordion_body");
            var $content = $(this).find(".c-accordion_content");

            setAccordionState($component, $body, $content);
        });
    }

    /**
     * Toggles the accordion state when the accordion head is clicked.
     */
    $(".c-accordion_head").click(function() {
        var $component = $(this).closest(".c-accordion");
        var $body = $component.find(".c-accordion_body");
        var $content = $component.find(".c-accordion_content");

        toggleAccordionState($component, $body, $content);
    });

    /**
     * Toggles the accordion state.
     *
     * @param {jQuery} $component The accordion component $ element.
     */
    function toggleAccordionState($component) {
        var $body = $component.find(".c-accordion_body");
        var $content = $component.find(".c-accordion_content");

        $component.toggleClass("is-expanded");
        $component.attr("aria-expanded", $component.attr("aria-expanded") == "true" ? "false" : "true");

        setAccordionState($component, $body, $content);
    }

    /**
     * Sets the accordion's body height depending on it's current state.
     *
     * @param {jQuery} $component The accordion component $ element.
     * @param {jQuery} $body      The accordion component's body $ element.
     * @param {jQuery} $content   The accordion component's content $ element.
     */
    function setAccordionState($component, $body, $content) {
        if ($component.hasClass("is-expanded")) {
            $body.css("height", $content.outerHeight());
        } else {
            $body.css("height", 0);
        }
    }
});


//# sourceURL=webpack:///./assets/src/js/modules/accordion.js?