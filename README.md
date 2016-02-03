# html-minifier-loader

Webpack loader that minifies HTML by [html-minifier](https://github.com/kangax/html-minifier).
If you wish to use [minimize](https://github.com/Moveo/minimize), please use [html-minify-loader](https://github.com/bestander/html-minify-loader).

Installation
---
```console
npm install html-minifier-loader
```

Example of webpack.config.js
---
You can pass [html-minifier](https://github.com/kangax/html-minifier) parameters by 'html-minifier-loader' property.
The default is `{removeComments: true, collapseWhitespace: true}`.
```
module: {
    loaders: [
        {    test: /\.html$/,
             loader: 'raw!html-minifier'
        }
    ]
},
'html-minifier-loader': {
    removeComments: false,
    collapseWhitespace: true,
    conservativeCollapse: true,
    preserveLineBreaks: true
}
```
