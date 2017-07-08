# Angular2+ Image Fallback ![https://www.npmjs.com/package/ng2-img-fallback](https://img.shields.io/npm/dm/ng2-img-fallback.svg?style=flat) ![https://www.npmjs.com/package/ngx-img-fallback](https://img.shields.io/npm/dm/ngx-img-fallback.svg?style=flat) [![npm version](https://badge.fury.io/js/ng2-img-fallback.svg)](https://badge.fury.io/js/ngx-img-fallback)  ![Dependencies](https://david-dm.org/vadimdez/ngx-img-fallback.svg)

> Load placeholder image on image error

Angular 4+ directive that loads placeholder image on primary image error.

[Demo page](https://vadimdez.github.io/ngx-img-fallback/)

### Install

```
npm install  ngx-img-fallback --save
```

### Usage

In case you're using ```SystemJS``` see configuration [here](https://github.com/VadimDez/ngx-img-fallback/blob/master/SYSTEMJS.md)


Add module to your module's ```imports```

```ts
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

```ts
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

### Events

#### `(loaded)`

`ngx-img-fallback` provides `(loaded)` event which is fired when either `src` or `src-fallback` is loaded.
To determinate whether original source or fallback is loaded - add a param to your callback for the `(loaded)` event.
 
Example:

First add callback to your component

```ts
onLoaded(isFallback: boolean) {
  // make somthing based on 'isFallback'
}
```
and then bind it to the `loaded` event

```html
<img src="picture1.png" src-fallback="picture2.png" (loaded)="onLoaded($event)"> 
```

### License

[MIT](https://tldrlegal.com/license/mit-license) © [Vadym Yatsyuk](https://github.com/vadimdez)
