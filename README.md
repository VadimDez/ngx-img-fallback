# Angular2 Image Fallback [![npm version](https://badge.fury.io/js/ng2-img-fallback.svg)](https://badge.fury.io/js/ng2-img-fallback) [![Bower version](https://badge.fury.io/bo/ng2-img-fallback.svg)](https://badge.fury.io/bo/ng2-img-fallback) ![Dependencies](https://david-dm.org/vadimdez/ng2-img-fallback.svg)

> Load placeholder image on image error

Angular 2 directive that loads placeholder image on primary image error.

[Demo page](https://vadimdez.github.io/ng2-img-fallback/)

### Install

*NPM:*

```
npm install  ng2-img-fallback --save
```
or *Bower:*

```
bower install ng2-img-fallback --save
```

### Usage

In case you're using ```SystemJS``` see configuration [here](https://github.com/VadimDez/ng2-img-fallback/edit/master/SYSTEMJS.md)


Add directive to your module's ```declarations```

```js
import { NgModule } from '@angular/core';
import { BrowserModule  } from '@angular/platform-browser';
import { AppComponent } from './app';

import { Ng2ImgFallback } from 'ng2-img-fallback';

@NgModule({
  imports: [BrowserModule],
  declarations: [AppComponent, Ng2ImgFallback],
  bootstrap: [AppComponent]
})
export class AppModule {}
```

Use it in you component

```js
import { Component } from '@angular/core';
import { Ng2ImgFallback } from 'ng2-img-fallback';

@Component({
  selector: 'example-app',
  template: '<img src="some_img.png" src-fallback="{{ placeholder }}" >'
})
export class AppComponent {
  placeholder = 'http://placehold.it/200x200';
}

```

See also [example](https://github.com/VadimDez/ng2-img-fallback/tree/master/example) or [demo page](https://vadimdez.github.io/ng2-img-fallback/)

### License

[MIT](https://tldrlegal.com/license/mit-license) © [Vadym Yatsyuk](https://github.com/vadimdez)
