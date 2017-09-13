# Changelog

## 1.2.0
* [[19](https://github.com/VadimDez/ngx-img-fallback/issues/19)] - Support server side rendering

## 1.1.3
* [[18](https://github.com/VadimDez/ngx-img-fallback/issues/18)] - Wrong contents for 1.1.2 in npm

## 1.1.2
* [[#13](https://github.com/VadimDez/ngx-img-fallback/issues/13)] - Fallback image not loaded when the dynamic image source changed

## 1.1.0
* Generate UMD bundle

### Breaking changes

*This breaking change only valid for `SYSTEMJS` approach,*


Now you have to do this in you `system.config.js` file:


Replace in your ```packages```

```js
var packages = {
    ...
    'ngx-img-fallback': { main: 'dist/bundles/ngx-img-fallback.umd.js' }
}
```


## 1.0.0
* [[#15](https://github.com/VadimDez/ngx-img-fallback/issues/15)] - Rename project

## 0.2.3
* [[#14](https://github.com/VadimDez/ng2-img-fallback/issues/14)] - Angular 4

## 0.2.2
* [[#11](https://github.com/VadimDez/ng2-img-fallback/issues/11)] - Added `(loaded)` event

## 0.2.1
* [[#10](https://github.com/VadimDez/ng2-img-fallback/issues/10)] - Error Ionic2 run android device

#### Breaking changes
Now instead of declaring `Ng2ImgFallbackModule` you need to import it:
```ts
@NgModule({
  imports: [BrowserModule, Ng2ImgFallbackModule],
  declarations: [AppComponent],
  bootstrap: [AppComponent]
})
```

## 0.2.0

* [[#10](https://github.com/VadimDez/ng2-img-fallback/issues/10)] - Error Ionic2 run android device

#### Breaking changes
Now instead of declaring `Ng2ImgFallback` you need to import it:
```ts
@NgModule({
  imports: [BrowserModule, Ng2ImgFallback],
  declarations: [AppComponent],
  bootstrap: [AppComponent]
})
```

## 0.1.4

* [[#8](https://github.com/VadimDez/ng2-img-fallback/issues/8)] - Fixed typings (Can't find main.d.ts file)

## 0.1.3

* [[#6](https://github.com/VadimDez/ng2-img-fallback/issues/6)] - Update to Angular RC6
* [[#7](https://github.com/VadimDez/ng2-img-fallback/issues/7)] - Update how-to to Angular RC6
* Removed version lock from peer dependency

## 0.1.2

* [[#3](https://github.com/VadimDez/ng2-img-fallback/issues/3)] - Update peer dependency
* [[#4](https://github.com/VadimDez/ng2-img-fallback/issues/4)] - Update to angular2.0.0-rc.5
