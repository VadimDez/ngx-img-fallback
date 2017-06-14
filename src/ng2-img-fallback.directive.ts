import { Directive, ElementRef, Input, Output, EventEmitter } from '@angular/core';

@Directive({
  selector: '[src-fallback]'
})
export class ImgFallbackDirective {

  @Input('src-fallback') imgSrc: string;
  @Output('loaded') loaded: EventEmitter<boolean> = new EventEmitter<boolean>();
  private el: HTMLElement;
  private isApplied: boolean = false;
  private ERROR_EVENT_TYPE: string = 'error';
  private LOAD_EVENT_TYPE: string = 'load';

  constructor(el: ElementRef) {
    this.el = el.nativeElement;
    this.el.addEventListener(this.ERROR_EVENT_TYPE, this.onError.bind(this));
    this.el.addEventListener(this.LOAD_EVENT_TYPE, this.onLoad.bind(this));
  }

  private onError() {
    this.removeErrorEvent();

    if (!this.isApplied) {
      this.isApplied = true;
      this.el.setAttribute('src', this.imgSrc);
    }

    this.removeOnLoadEvent();
  }

  private onLoad() {
    this.loaded.emit(this.isApplied);
  }

  private removeErrorEvent() {
    this.el.removeEventListener(this.ERROR_EVENT_TYPE, this.onError);
  }

  private removeOnLoadEvent() {
    this.el.removeEventListener(this.LOAD_EVENT_TYPE, this.onLoad);
  }

  ngOnDestroy() {
    this.removeErrorEvent();
    this.removeOnLoadEvent();
  }
}
