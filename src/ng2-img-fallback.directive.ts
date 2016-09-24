import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[src-fallback]'
})
export class Ng2ImgFallback {

  @Input('src-fallback') imgSrc: string;
  private el: HTMLElement;
  private isApplied: boolean = false;
  private EVENT_TYPE: string = 'error';

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
