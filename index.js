var minify = require('html-minifier').minify
  , loaderUtils = require('loader-utils')

module.exports = function(source) {
  this.cacheable && this.cacheable()
  var defaultOptions = {
        removeComments: true,
        collapseWhitespace: true
      }
    , options = this.options && this.options['html-minifier-loader'] || {}
    , options2
  try {
    options2 = loaderUtils.getOptions(this)
  } catch(e) {
    options2 = {}
  }
  return minify(source, Object.assign(defaultOptions, options, options2))
}
