"use strict";
var core_1 = require('@angular/core');
var Ng2ImgFallbackDirective = (function () {
    function Ng2ImgFallbackDirective(el) {
        this.loaded = new core_1.EventEmitter();
        this.isApplied = false;
        this.ERROR_EVENT_TYPE = 'error';
        this.LOAD_EVENT_TYPE = 'load';
        this.el = el.nativeElement;
        this.el.addEventListener(this.ERROR_EVENT_TYPE, this.onError.bind(this));
        this.el.addEventListener(this.LOAD_EVENT_TYPE, this.onLoad.bind(this));
    }
    Ng2ImgFallbackDirective.prototype.onError = function () {
        this.removeErrorEvent();
        if (!this.isApplied) {
            this.isApplied = true;
            this.el.setAttribute('src', this.imgSrc);
        }
        this.removeOnLoadEvent();
    };
    Ng2ImgFallbackDirective.prototype.onLoad = function () {
        this.loaded.emit(this.isApplied);
    };
    Ng2ImgFallbackDirective.prototype.removeErrorEvent = function () {
        this.el.removeEventListener(this.ERROR_EVENT_TYPE, this.onError);
    };
    Ng2ImgFallbackDirective.prototype.removeOnLoadEvent = function () {
        this.el.removeEventListener(this.LOAD_EVENT_TYPE, this.onLoad);
    };
    Ng2ImgFallbackDirective.prototype.ngOnDestroy = function () {
        this.removeErrorEvent();
        this.removeOnLoadEvent();
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
        'loaded': [{ type: core_1.Output, args: ['loaded',] },],
    };
    return Ng2ImgFallbackDirective;
}());
exports.Ng2ImgFallbackDirective = Ng2ImgFallbackDirective;
//# sourceMappingURL=ng2-img-fallback.directive.js.map