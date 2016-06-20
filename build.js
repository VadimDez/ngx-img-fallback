/**
 * Created by Vadym Yatsyuk on 15/06/16
 */
var path = require("path");
var Builder = require('systemjs-builder');

var builder = new Builder('./', './system.config.js');

builder
  .buildStatic('./app.js', './dist/build.js')
  .then(function() {
    console.log('Build complete');
  })
  .catch(function(err) {
    console.log('Build error');
    console.log(err);
  });