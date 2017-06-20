"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var ImgFallbackDirective = (function () {
    function ImgFallbackDirective(el) {
        this.loaded = new core_1.EventEmitter();
        this.isApplied = false;
        this.ERROR_EVENT_TYPE = 'error';
        this.LOAD_EVENT_TYPE = 'load';
        this.el = el.nativeElement;
        this.el.addEventListener(this.ERROR_EVENT_TYPE, this.onError.bind(this));
        this.el.addEventListener(this.LOAD_EVENT_TYPE, this.onLoad.bind(this));
    }
    ImgFallbackDirective.prototype.onError = function () {
        this.removeErrorEvent();
        if (!this.isApplied) {
            this.isApplied = true;
            this.el.setAttribute('src', this.imgSrc);
        }
        this.removeOnLoadEvent();
    };
    ImgFallbackDirective.prototype.onLoad = function () {
        this.loaded.emit(this.isApplied);
    };
    ImgFallbackDirective.prototype.removeErrorEvent = function () {
        this.el.removeEventListener(this.ERROR_EVENT_TYPE, this.onError);
    };
    ImgFallbackDirective.prototype.removeOnLoadEvent = function () {
        this.el.removeEventListener(this.LOAD_EVENT_TYPE, this.onLoad);
    };
    ImgFallbackDirective.prototype.ngOnDestroy = function () {
        this.removeErrorEvent();
        this.removeOnLoadEvent();
    };
    return ImgFallbackDirective;
}());
ImgFallbackDirective.decorators = [
    { type: core_1.Directive, args: [{
                selector: '[src-fallback]'
            },] },
];
/** @nocollapse */
ImgFallbackDirective.ctorParameters = function () { return [
    { type: core_1.ElementRef, },
]; };
ImgFallbackDirective.propDecorators = {
    'imgSrc': [{ type: core_1.Input, args: ['src-fallback',] },],
    'loaded': [{ type: core_1.Output, args: ['loaded',] },],
};
exports.ImgFallbackDirective = ImgFallbackDirective;
//# sourceMappingURL=ngx-img-fallback.directive.js.map