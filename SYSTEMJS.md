# SystemJS

In your ```system.config.js```:

Add to ```map```

```js
var map = {
    ...
    'ng2-img-fallback': 'node_modules/ng2-img-fallback'
}
```

and then to ```packages```

```js
var packages = {
    ...
    'ng2-img-fallback': { main: 'dist/index.js' }
}
```
