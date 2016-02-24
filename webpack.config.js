var path = require('path');
var webpack = require('webpack');

module.exports = [
{
  watch: true,
  name: 'dev-build',
  entry: './app/main.js',
  output: {
    path: __dirname,
    publicPath: '/',
    filename: './build/bundle.js',
    sourceMapFilename: 'bundle.map'
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin()
 ],

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
      },
      { test: /\.css$/, loader: "style!css" },
      { test: /\.(png|jpg)$/, loader: 'url-loader?limit=25000' }
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
},
{
  name: 'tests-build',
  watch: true,
  entry: './tests/main.js',
  output: {
    path: __dirname,
    filename: './tests/testBundle.js',
    sourceMapFilename: 'bundle.map'
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
  }
}];
