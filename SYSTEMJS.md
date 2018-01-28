# SystemJS

In your ```system.config.js```:

Add to ```map```

```js
var map = {
    ...
    'ngx-img-fallback': 'node_modules/ngx-img-fallback/bundles'
}
```

and then to ```packages```

```js
var packages = {
    ...
    'ngx-img-fallback': { defaultExtension: 'js' }
}
```
