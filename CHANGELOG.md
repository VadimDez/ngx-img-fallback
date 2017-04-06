# Changelog

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
