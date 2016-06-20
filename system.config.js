// (function (global) {

  // map tells the System loader where to look for things
  var map = {
    'app': './',
    'rxjs': './node_modules/rxjs',
    '@angular': './node_modules/@angular',
    'ng2-img-fallback': './node_modules/ng2-img-fallback'
  };

  // packages tells the System loader how to load when no filename and/or no extension
  var packages = {
    'app': { main: 'main.js', defaultExtension: 'js' },
    'rxjs': { defaultExtension: 'js' },
    'ng2-img-fallback': { main: 'dist/index.js' }
  };

  var packageNames = [
    '@angular/common',
    '@angular/compiler',
    '@angular/core',
    '@angular/platform-browser',
    '@angular/platform-browser-dynamic'
  ];

  packageNames.forEach(function (pkgName) {
    packages[pkgName] = { main: 'index.js', defaultExtension: 'js' };
  });

  var config = {
    map: map,
    packages: packages
  };

  // filterSystemConfig - index.html's chance to modify config before we register it.
  // if (this.filterSystemConfig) {
  //   this.filterSystemConfig(config);
  // }

  System.config(config);

// })(this);