import { Component } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'ng2-img-fallback-app',
  templateUrl: 'ng2-img-fallback.component.html',
  styleUrls: ['ng2-img-fallback.component.css']
})
export class Ng2ImgFallbackAppComponent {
  title = 'ng2-img-fallback works!';

  placeholder = 'http://placehold.it/200x200';

  public onError(): void {

  }
}
