"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
///<reference path="../typings/main.d.ts"/>
var core_1 = require('@angular/core');
var Ng2ImgFallback = (function () {
    function Ng2ImgFallback(el) {
        this.el = el.nativeElement;
        this.listener = this.el.addEventListener('error', this.onError.bind(this));
    }
    Ng2ImgFallback.prototype.onError = function () {
        this.el.removeEventListener('error', this.listener);
        this.el.setAttribute('src', this.imgSrc);
    };
    __decorate([
        core_1.Input('ng2-img-fallback'), 
        __metadata('design:type', String)
    ], Ng2ImgFallback.prototype, "imgSrc", void 0);
    Ng2ImgFallback = __decorate([
        core_1.Directive({
            selector: '[ng2-img-fallback]'
        }), 
        __metadata('design:paramtypes', [core_1.ElementRef])
    ], Ng2ImgFallback);
    return Ng2ImgFallback;
}());
exports.Ng2ImgFallback = Ng2ImgFallback;
//# sourceMappingURL=ng2-img-fallback.directive.js.map