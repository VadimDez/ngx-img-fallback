///<reference path="../typings/main.d.ts"/>
import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[ng2-img-fallback]'
})
export class Ng2ImgFallback {

  @Input('ng2-img-fallback') imgSrc: string;
  private el:HTMLElement;
  private isApplied: boolean = false;
  private EVENT_TYPE = 'error';

  constructor(el: ElementRef) {
    this.el = el.nativeElement;
    this.el.addEventListener(this.EVENT_TYPE, this.onError.bind(this))
  }

  private onError() {
    this.removeEvents();

    if (!this.isApplied) {
      this.isApplied = true;
      this.el.setAttribute('src', this.imgSrc);
    }
  }

  private removeEvents() {
    this.el.removeEventListener(this.EVENT_TYPE, this.onError);
  }

  ngOnDestroy() {
    this.removeEvents();
  }
}
