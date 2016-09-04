import { Component } from '@angular/core';

@Component({
  selector: 'example-app',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  brokenPlaceholder = 'broken_placeholder';
  workingPlaceholder = 'https://placehold.it/100x100';
}
