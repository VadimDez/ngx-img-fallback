# ng2-img-fallback

> Load placeholder image on image error

Angular 2 directive that loads placeholder image on primary image error.

[Demo page](http://vadimdez.github.io/ng2-img-fallback/)

### Install

```
npm install  ng2-img-fallback --save
```

### Usage

Import directive to your component

```js

import { Component } from '@angular/core';
import { Ng2ImgFallback } from 'ng2-img-fallback';

@Component({
  selector: 'example-app',
  templateUrl: 'app.component.html',
  directives: [Ng2ImgFallback]
})
export class AppComponent {
  placeholder = 'http://placehold.it/200x200';
}

```

Use directive in html

```html
<img src="some_img.png" ng2-img-fallback="{{ placeholder }}" >
```

See also example

### License

MIT © [Vadym Yatsyuk](https://github.com/vadimdez)
