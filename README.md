<h1 align="center">Angular 5+ Image Fallback</h1>

<p align="center">
  <a href="https://www.npmjs.com/package/ngx-img-fallback">
    <img src="https://img.shields.io/npm/dm/ngx-img-fallback.svg?style=flat" alt="downloads">
  </a>
  
  <a href="https://www.npmjs.com/package/ng2-img-fallback">
    <img src="https://badge.fury.io/js/ng2-img-fallback.svg" alt="downloads">
  </a>
  
  <a href="https://www.paypal.me/vadimdez">
    <img src="https://img.shields.io/badge/paypal-donate-yellow.svg" alt="downloads">
  </a>
</p>

> Load placeholder image on image error

Angular 5+ directive that loads placeholder image on primary image error.

### Demo page

[Demo page](https://vadimdez.github.io/ngx-img-fallback/)

### Stackblitz Example

[https://stackblitz.com/edit/ngx-img-fallback](https://stackblitz.com/edit/ngx-img-fallback)

## Install

```
npm install  ngx-img-fallback --save
```

*For Angular 2+ use version `1.2.0`*

## Usage

*In case you're using ```SystemJS``` see configuration [here](https://github.com/VadimDez/ngx-img-fallback/blob/master/SYSTEMJS.md)*


Add module to your module's ```imports```

```typescript
import { NgModule } from '@angular/core';
import { BrowserModule  } from '@angular/platform-browser';
import { AppComponent } from './app';
 
import { ImgFallbackModule } from 'ngx-img-fallback';
 

@NgModule({
  imports: [
    BrowserModule, 
    ImgFallbackModule
  ],
  declarations: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
```

Use it in you component

```typescript
import { Component } from '@angular/core';

@Component({
  selector: 'example-app',
  template: '<img src="some_img.png" src-fallback="{{ placeholder }}">'
})
export class AppComponent {
  placeholder = 'http://placehold.it/200x200';
}

```

See also [example](https://github.com/VadimDez/ngx-img-fallback/tree/master/example) or [demo page](https://vadimdez.github.io/ngx-img-fallback/)

## Events

#### `(loaded)`

`ngx-img-fallback` provides `(loaded)` event which is fired when either `src` or `src-fallback` is loaded.
To determinate whether original source or fallback is loaded - add a param to your callback for the `(loaded)` event.
 
Example:

First add callback to your component

```typescript
onLoaded(isFallback: boolean) {
  // make somthing based on 'isFallback'
}
```
and then bind it to the `loaded` event

```html
<img src="picture1.png" src-fallback="picture2.png" (loaded)="onLoaded($event)"> 
```

## License

[MIT](https://tldrlegal.com/license/mit-license) © [Vadym Yatsyuk](https://github.com/vadimdez)
