"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Created by vadimdez on 27/11/2016.
 */
var core_1 = require("@angular/core");
var ngx_img_fallback_directive_1 = require("./ngx-img-fallback.directive");
var ImgFallbackModule = (function () {
    function ImgFallbackModule() {
    }
    return ImgFallbackModule;
}());
ImgFallbackModule.decorators = [
    { type: core_1.NgModule, args: [{
                declarations: [ngx_img_fallback_directive_1.ImgFallbackDirective],
                exports: [ngx_img_fallback_directive_1.ImgFallbackDirective]
            },] },
];
/** @nocollapse */
ImgFallbackModule.ctorParameters = function () { return []; };
exports.ImgFallbackModule = ImgFallbackModule;
//# sourceMappingURL=ngx-img-fallback.module.js.map