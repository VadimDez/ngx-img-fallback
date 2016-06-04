var Filter = require('broccoli-filter')
var UglifyJS = require('uglify-js')

module.exports = UglifyJSFilter
UglifyJSFilter.prototype = Object.create(Filter.prototype)
UglifyJSFilter.prototype.constructor = UglifyJSFilter
function UglifyJSFilter (inputTree, options) {
  if (!(this instanceof UglifyJSFilter)) return new UglifyJSFilter(inputTree, options)
  Filter.call(this, inputTree, options)
  this.options = options || {}
}

UglifyJSFilter.prototype.extensions = ['js']
UglifyJSFilter.prototype.targetExtension = 'js'

UglifyJSFilter.prototype.processString = function (string) {
  var result = UglifyJS.minify(string, {
    fromString: true,
    mangle: this.options.mangle,
    compress: this.options.compress,
    output: this.options.output
  })
  return result.code
}
