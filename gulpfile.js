var gulp = require('gulp');
var mocha = require('gulp-mocha');
var jshint = require('gulp-jshint');
var webpack = require('webpack-stream');
var concatCSS = require('gulp-concat-css');
var minifyCSS = require('gulp-minify-css');

var appFiles = ['server.js', __dirname + '/routes/**/*.js',
                __dirname + '/models/**/*.js',
                __dirname + '/lib/**/*.js',
                __dirname + '/lib/**/*.js'
                ];

var testFiles = [__dirname + '/test/**/*.js'];
var htmlFiles = [__dirname + '/app/**/*.html'];

/* * * * * * * * * * * * * * * * * *
            BUILD TASKS
 * * * * * * * * * * * * * * * * * */

// place all html in build folder.
gulp.task('static:dev', function() {
  return gulp.src(htmlFiles)
  .pipe(gulp.dest('build/'))
});

// generate entry.js, run through webpack, send to build folder.
gulp.task('webpack:dev', function() {
  return gulp.src('app/js/entry.js')
  .pipe(webpack({
    output: {
      filename: 'bundle.js'
    }
  }))
  .pipe(gulp.dest('build/'));
});

// for client tests.
gulp.task('webpack:test', function() {
  return gulp.src('test/client/test_entry.js')
  .pipe(webpack({
    output: {
      file: 'test_bundle.js'
    }
  }))
  .pipe(gulp.dest('test/client'));
})

 /* * * * * * * * * * * * * * * * * *
            LINT TASKS
 * * * * * * * * * * * * * * * * * */



 /* * * * * * * * * * * * * * * * * *
            TEST TASKS
 * * * * * * * * * * * * * * * * * */

 /* * * * * * * * * * * * * * * * * *
            WATCH TASKS
 * * * * * * * * * * * * * * * * * */

gulp.task('watch:build', function() {
  gulp.watch(htmlFiles, ['static:dev']);
  gulp.watch('app/**/*.js', ['webpack:dev']);
  gulp.watch('test/client/**/*.js', ['webpack:test']);
});

 /* * * * * * * * * * * * * * * * * *
              DEFAULT
 * * * * * * * * * * * * * * * * * */

 gulp.task('default', ['watch:build']);
