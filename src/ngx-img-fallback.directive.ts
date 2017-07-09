import { Directive, ElementRef, Input, Output, EventEmitter, OnDestroy } from '@angular/core';

@Directive({
  selector: '[src-fallback]'
})
export class ImgFallbackDirective implements OnDestroy {

  @Input('src-fallback') imgSrc: string;
  @Output('loaded') loaded = new EventEmitter<boolean>();
  private el: HTMLElement;
  private isApplied: boolean = false;
  private ERROR_EVENT_TYPE: string = 'error';
  private LOAD_EVENT_TYPE: string = 'load';

  constructor(el: ElementRef) {
    this.el = el.nativeElement;

    this.onError = this.onError.bind(this);
    this.onLoad = this.onLoad.bind(this);
    this.addEvents();
  }

  ngOnDestroy() {
    this.removeErrorEvent();
    this.removeOnLoadEvent();
  }

  private onError() {
    if (this.el.getAttribute('src') !== this.imgSrc) {
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

  private addEvents() {
    this.el.addEventListener(this.ERROR_EVENT_TYPE, this.onError);
    this.el.addEventListener(this.LOAD_EVENT_TYPE, this.onLoad);
  }
}
