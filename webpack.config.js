var path = require('path');

module.exports = {
  entry: './app/main.js',
  output: {
    path: __dirname,
    filename: './build/bundle.js'
  },
  devtool: 'eval-source-map',
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
  },
  resolve: {
    root: [
      path.resolve('./app/')
    ]
  },
  devServer: {
    port: 8080,
    host: "0.0.0.0"
  }
};
