import { Component } from '@angular/core';
import { Ng2ImgFallback } from 'ng2-img-fallback';

@Component({
  selector: 'example-app',
  templateUrl: 'app.component.html',
  directives: [Ng2ImgFallback]
})
export class AppComponent {
  brokenPlaceholder = 'broken_placeholder';
  workingPlaceholder = 'https://placehold.it/100x100';
}
