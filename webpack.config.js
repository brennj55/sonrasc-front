module.exports = {
  entry: './app/main.js',
  output: {
    path: __dirname,
    filename: './build/bundle.js'
  },
  devServer: {
    port: 8080,
    host: "0.0.0.0"
  }
};
