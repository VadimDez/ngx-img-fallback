'use strict';

var glob = require('glob').sync;

var paths = glob('tests/*').filter(function(path) {
  return !/fixtures/.test(path);
});

paths = paths.concat([
  'index.js'
]);

require('mocha-eslint')(paths);
