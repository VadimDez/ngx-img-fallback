/**
 * Created by Vadym Yatsyuk on 15/06/16
 */
var path = require("path");
var Builder = require('systemjs-builder');

// optional constructor options
// sets the baseURL and loads the configuration file
var builder = new Builder('/');

builder.loadConfig('./system.config.js');

builder
  .bundle('main.js', 'outfile.js')
  .then(function() {
    console.log('Build complete');
  })
  .catch(function(err) {
    console.log('Build error');
    console.log(err);
  });