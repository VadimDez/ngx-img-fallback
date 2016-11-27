import { ElementRef } from '@angular/core';
export declare class Ng2ImgFallbackDirective {
    imgSrc: string;
    private el;
    private isApplied;
    private EVENT_TYPE;
    constructor(el: ElementRef);
    private onError();
    private removeEvents();
    ngOnDestroy(): void;
}
