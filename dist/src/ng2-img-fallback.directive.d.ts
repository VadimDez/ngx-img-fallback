import { ElementRef, EventEmitter } from '@angular/core';
export declare class Ng2ImgFallbackDirective {
    imgSrc: string;
    loaded: EventEmitter<boolean>;
    private el;
    private isApplied;
    private ERROR_EVENT_TYPE;
    private LOAD_EVENT_TYPE;
    constructor(el: ElementRef);
    private onError();
    private onLoad();
    private removeErrorEvent();
    private removeOnLoadEvent();
    ngOnDestroy(): void;
}
