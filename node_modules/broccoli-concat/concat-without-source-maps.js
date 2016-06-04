'use strict';
var fs = require('fs');
var path = require('path');

module.exports = Simple;
function Simple(attrs) {
  this._internal = '';
  this.outputFile = attrs.outputFile;
  this.baseDir = attrs.baseDir;
}

Simple.prototype.addFile = function(file) {
  this._internal += fs.readFileSync(path.join(this.baseDir, file), 'UTF-8');
};

Simple.prototype.addSpace = function(space) {
  this._internal += space;
};

Simple.prototype.end = function(cb, thisArg) {
  var result;
  if (cb) {
    result = cb.call(thisArg, this);
  }
  fs.writeFileSync(this.outputFile, this._internal);
  return result;
};
