(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core')) :
	typeof define === 'function' && define.amd ? define(['exports', '@angular/core'], factory) :
	(factory((global.ngresizable = global.ngresizable || {}),global._angular_core));
}(this, (function (exports,_angular_core) { 'use strict';

var __decorate$1 = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
exports.ImgFallbackDirective = (function () {
    function ImgFallbackDirective(el) {
        this.loaded = new _angular_core.EventEmitter();
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
__decorate$1([
    _angular_core.Input('src-fallback'),
    __metadata("design:type", String)
], exports.ImgFallbackDirective.prototype, "imgSrc", void 0);
__decorate$1([
    _angular_core.Output('loaded'),
    __metadata("design:type", _angular_core.EventEmitter)
], exports.ImgFallbackDirective.prototype, "loaded", void 0);
exports.ImgFallbackDirective = __decorate$1([
    _angular_core.Directive({
        selector: '[src-fallback]'
    }),
    __metadata("design:paramtypes", [_angular_core.ElementRef])
], exports.ImgFallbackDirective);

var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/**
 * Created by vadimdez on 27/11/2016.
 */
exports.ImgFallbackModule = (function () {
    function ImgFallbackModule() {
    }
    return ImgFallbackModule;
}());
exports.ImgFallbackModule = __decorate([
    _angular_core.NgModule({
        declarations: [exports.ImgFallbackDirective],
        exports: [exports.ImgFallbackDirective]
    })
], exports.ImgFallbackModule);

/**
 * Created by vadimdez on 04/06/16.
 */

Object.defineProperty(exports, '__esModule', { value: true });

})));
