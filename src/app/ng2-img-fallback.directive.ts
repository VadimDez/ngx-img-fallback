import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[ng2-img-fallback]'
})
export class Ng2ImgFallback {

  @Input('ng2-img-fallback') imgSrc: string;
  private el:HTMLElement;
  private listener: any;

  constructor(el: ElementRef) {
    this.el = el.nativeElement;
    this.listener = this.el.addEventListener('error', this.onError.bind(this))
  }

  private onError() {
    this.el.removeEventListener('error', this.listener);
    this.el.setAttribute('src', this.imgSrc);
  }
}
