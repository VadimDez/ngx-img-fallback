/// <reference path="../../typings/main.d.ts" />
import { ElementRef } from '@angular/core';
export declare class Ng2ImgFallback {
    imgSrc: string;
    private el;
    private listener;
    constructor(el: ElementRef);
    private onError();
}
