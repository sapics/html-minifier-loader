var minify = require('html-minifier').minify;

module.exports = function(source) {
  this.cacheable && this.cacheable();
  var callback = this.async(),
      options = this.options['html-minifier-loader'],
      defaultOptions = {
        removeComments: true,
        collapseWhitespace: true
      }

  if(options){
    for (var k in defaultOptions) {
      if (options[k] == null) {
        options[k] = defaultOptions[k]
      }
    }
  }

  callback(null, minify(source, options || defaultOptions))
};
