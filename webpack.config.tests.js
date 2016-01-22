var path = require('path');

module.exports = {
  entry: './tests/main.js',
  output: {
    path: __dirname,
    filename: 'testBundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel',
        query: {
          presets: ['react', 'es2015']
        }
      }
    ]
  }
};
