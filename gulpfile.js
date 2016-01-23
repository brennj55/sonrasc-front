var gulp = require('gulp');
var webpackStream = require('webpack-stream');
var webpack = require("webpack");
var gutil = require('gulp-util');
var webpackDevServer = require('webpack-dev-server');

gulp.task('tests:build', function() {
  return webpackStream(require('./webpack.config.tests.js'))
    .pipe(gulp.dest('./tests/'));
});

gulp.task("webpack-dev-server", function(callback) {
    // Start a webpack-dev-server
    var compiler = webpack(require('./webpack.config.js'));

    new webpackDevServer(compiler, {
        // server and middleware options
    }).listen(8080, "0.0.0.0", function(err) {
        if(err) throw new gutil.PluginError("webpack-dev-server", err);
    });
});

gulp.task('default', ['tests:build', 'webpack-dev-server']);
