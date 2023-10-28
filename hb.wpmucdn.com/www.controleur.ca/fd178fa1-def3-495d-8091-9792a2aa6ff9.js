/**handles:flickity-fade**/ ! function(e, t) {
    "function" == typeof define && define.amd ? define(["flickity/js/index", "fizzy-ui-utils/utils"], t) : "object" == typeof module && module.exports ? module.exports = t(require("flickity"), require("fizzy-ui-utils")) : t(e.Flickity, e.fizzyUIUtils)
}(this, function(e, t) {
    var i = e.Slide,
        s = i.prototype.updateTarget;
    i.prototype.updateTarget = function() {
        if (s.apply(this, arguments), this.parent.options.fade) {
            var e = this.target - this.x,
                t = this.cells[0].x;
            this.cells.forEach(function(i) {
                var s = i.x - t - e;
                i.renderPosition(s)
            })
        }
    }, i.prototype.setOpacity = function(e) {
        this.cells.forEach(function(t) {
            t.element.style.opacity = e
        })
    };
    var a = e.prototype;
    e.createMethods.push("_createFade"), a._createFade = function() {
        this.fadeIndex = this.selectedIndex, this.prevSelectedIndex = this.selectedIndex, this.on("select", this.onSelectFade), this.on("dragEnd", this.onDragEndFade), this.on("settle", this.onSettleFade), this.on("activate", this.onActivateFade), this.on("deactivate", this.onDeactivateFade)
    };
    var n = a.updateSlides;
    a.updateSlides = function() {
        n.apply(this, arguments), this.options.fade && this.slides.forEach(function(e, t) {
            var i = t == this.selectedIndex ? 1 : 0;
            e.setOpacity(i)
        }, this)
    }, a.onSelectFade = function() {
        this.fadeIndex = Math.min(this.prevSelectedIndex, this.slides.length - 1), this.prevSelectedIndex = this.selectedIndex
    }, a.onSettleFade = function() {
        (delete this.didDragEnd, this.options.fade) && (this.selectedSlide.setOpacity(1), this.slides[this.fadeIndex] && this.fadeIndex != this.selectedIndex && this.slides[this.fadeIndex].setOpacity(0))
    }, a.onDragEndFade = function() {
        this.didDragEnd = !0
    }, a.onActivateFade = function() {
        this.options.fade && this.element.classList.add("is-fade")
    }, a.onDeactivateFade = function() {
        this.options.fade && (this.element.classList.remove("is-fade"), this.slides.forEach(function(e) {
            e.setOpacity("")
        }))
    };
    var d = a.positionSlider;
    a.positionSlider = function() {
        this.options.fade ? (this.fadeSlides(), this.dispatchScrollEvent()) : d.apply(this, arguments)
    };
    var h = a.positionSliderAtSelected;
    a.positionSliderAtSelected = function() {
        this.options.fade && this.setTranslateX(0), h.apply(this, arguments)
    }, a.fadeSlides = function() {
        if (!(this.slides.length < 2)) {
            var e = this.getFadeIndexes(),
                t = this.slides[e.a],
                i = this.slides[e.b],
                s = this.wrapDifference(t.target, i.target),
                a = this.wrapDifference(t.target, -this.x);
            a /= s, t.setOpacity(1 - a), i.setOpacity(a);
            var n = e.a;
            this.isDragging && (n = a > .5 ? e.a : e.b), null != this.fadeHideIndex && this.fadeHideIndex != n && this.fadeHideIndex != e.a && this.fadeHideIndex != e.b && this.slides[this.fadeHideIndex].setOpacity(0), this.fadeHideIndex = n
        }
    }, a.getFadeIndexes = function() {
        return this.isDragging || this.didDragEnd ? this.options.wrapAround ? this.getFadeDragWrapIndexes() : this.getFadeDragLimitIndexes() : {
            a: this.fadeIndex,
            b: this.selectedIndex
        }
    }, a.getFadeDragWrapIndexes = function() {
        var e = this.slides.map(function(e, t) {
                return this.getSlideDistance(-this.x, t)
            }, this),
            i = e.map(function(e) {
                return Math.abs(e)
            }),
            s = Math.min.apply(Math, i),
            a = i.indexOf(s),
            n = e[a],
            d = this.slides.length,
            h = n >= 0 ? 1 : -1;
        return {
            a: a,
            b: t.modulo(a + h, d)
        }
    }, a.getFadeDragLimitIndexes = function() {
        for (var e = 0, t = 0; t < this.slides.length - 1; t++) {
            var i = this.slides[t];
            if (-this.x < i.target) break;
            e = t
        }
        return {
            a: e,
            b: e + 1
        }
    }, a.wrapDifference = function(e, t) {
        var i = t - e;
        if (!this.options.wrapAround) return i;
        var s = i + this.slideableWidth,
            a = i - this.slideableWidth;
        return Math.abs(s) < Math.abs(i) && (i = s), Math.abs(a) < Math.abs(i) && (i = a), i
    };
    var o = a._getWrapShiftCells;
    a._getWrapShiftCells = function() {
        this.options.fade || o.apply(this, arguments)
    };
    var r = a.shiftWrapCells;
    return a.shiftWrapCells = function() {
        this.options.fade || r.apply(this, arguments)
    }, e
});