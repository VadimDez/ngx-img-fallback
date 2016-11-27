"use strict";
var core_1 = require('@angular/core');
var Ng2ImgFallbackDirective = (function () {
    function Ng2ImgFallbackDirective(el) {
        this.isApplied = false;
        this.EVENT_TYPE = 'error';
        this.el = el.nativeElement;
        this.el.addEventListener(this.EVENT_TYPE, this.onError.bind(this));
    }
    Ng2ImgFallbackDirective.prototype.onError = function () {
        this.removeEvents();
        if (!this.isApplied) {
            this.isApplied = true;
            this.el.setAttribute('src', this.imgSrc);
        }
    };
    Ng2ImgFallbackDirective.prototype.removeEvents = function () {
        this.el.removeEventListener(this.EVENT_TYPE, this.onError);
    };
    Ng2ImgFallbackDirective.prototype.ngOnDestroy = function () {
        this.removeEvents();
    };
    Ng2ImgFallbackDirective.decorators = [
        { type: core_1.Directive, args: [{
                    selector: '[src-fallback]'
                },] },
    ];
    /** @nocollapse */
    Ng2ImgFallbackDirective.ctorParameters = [
        { type: core_1.ElementRef, },
    ];
    Ng2ImgFallbackDirective.propDecorators = {
        'imgSrc': [{ type: core_1.Input, args: ['src-fallback',] },],
    };
    return Ng2ImgFallbackDirective;
}());
exports.Ng2ImgFallbackDirective = Ng2ImgFallbackDirective;
//# sourceMappingURL=ng2-img-fallback.directive.js.map