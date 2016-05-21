var path = require('path');
var webpack = require('webpack');

module.exports = [{
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
    new webpack.HotModuleReplacementPlugin(),
    new webpack.DefinePlugin({
      'process.env.WEB_OCR_API_PORT': JSON.stringify(process.env.WEB_OCR_API_PORT_9005_TCP_PORT),
      'process.env.DB_API_PORT:': JSON.stringify(process.env.DB_API_PORT_7004_TCP_PORT)
    })
  ],

  devtool: 'eval-source-map',
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components|tests)/,
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
    hot: true,
    host: "0.0.0.0"
  }
},
{
  watch: true,
  name: 'dev-tests',
  entry: './tests/main.js',
  output: {
    path: __dirname,
    publicPath: '/',
    filename: './tests/bundle.js',
    sourceMapFilename: 'bundle.map'
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.DefinePlugin({
      'process.env.WEB_OCR_API_PORT': JSON.stringify(process.env.WEB_OCR_API_PORT_9005_TCP_PORT),
      'process.env.DB_API_PORT:': JSON.stringify(process.env.DB_API_PORT_7004_TCP_PORT)
    })
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
  }
}];
