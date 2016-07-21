var minify = require('html-minifier').minify
var loaderUtils = require('loader-utils')

module.exports = function(source) {
  this.cacheable && this.cacheable()
  var options = this.options['html-minifier-loader'] || loaderUtils.parseQuery(this.query)
  var defaultOptions = {
    removeComments: true,
    collapseWhitespace: true
  }

  return minify(source, Object.assign({}, defaultOptions, options))
}
