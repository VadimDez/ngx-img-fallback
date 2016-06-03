import { Component } from '@angular/core';

import { Ng2ImgFallback } from './ng2-img-fallback.directive'

@Component({
  moduleId: module.id,
  selector: 'ng2-img-fallback-app',
  templateUrl: 'ng2-img-fallback.component.html',
  styleUrls: ['ng2-img-fallback.component.css'],
  directives: [Ng2ImgFallback]
})
export class Ng2ImgFallbackAppComponent {
  title = 'ng2-img-fallback works!';

  placeholder = 'http://placehold.it/200x200';

  public onError(): void {

  }
}
