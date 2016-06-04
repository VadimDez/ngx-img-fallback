import { Component } from '@angular/core';
import { Ng2ImgFallback } from 'ng2-img-fallback';


@Component({
  selector: 'example-app',
  templateUrl: 'app.component.html',
  directives: [Ng2ImgFallback]
})
export class AppComponent {
  placeholder = 'http://placeholder.it/200x200';
}
