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
var cssFiles = ['app/css/reset.css', 'app/css/base.css', 'app/css/layout.css', 'app/css/modules.css', 'app/css/state.css', 'app/css/normalize.css', 'app/css/skeleton.css'];

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

gulp.task('css:dev', function() {
  gulp.src(cssFiles)
  .pipe(concatCSS('styles.min.css'))
  .pipe(minifyCSS())
  .pipe(gulp.dest('build/'));
});

 /* * * * * * * * * * * * * * * * * *
            LINT TASKS
 * * * * * * * * * * * * * * * * * */

gulp.task('jshint:appfiles', function() {
  gulp.src(appFiles)
  .pipe(jshint({
    node: true
  }))
  .pipe(jshint.reporter('default'));
});

//does not include client tests
gulp.task('jshint:testfiles', function() {
  gulp.src('test/*.js')
  .pipe(jshint({
      node: true,
      globals: {
        before: true,
        after: true,
        it: true,
        expect: true
      }
    }))
  .pipe(jshint.reporter('default'));
});


 /* * * * * * * * * * * * * * * * * *
            TEST TASKS
 * * * * * * * * * * * * * * * * * */
gulp.task('mocha', function() {
  gulp.src('/test/routes-test', {read: false})
  .pipe(mocha());
  console.log('**********************************');
  console.log('FOR CLIENT TESTS, RUN $karma start');
  console.log('**********************************');

});
 /* * * * * * * * * * * * * * * * * *
            WATCH TASKS
 * * * * * * * * * * * * * * * * * */

gulp.task('watch:build', function() {
  gulp.watch(htmlFiles, ['static:dev']);
  gulp.watch(cssFiles, ['css:dev']);
  gulp.watch('app/**/*.js', ['webpack:dev']);
  //gulp.watch('test/client/**/*.js', ['webpack:test']);    UNCOMMENT WHEN CLIENT TESTS BUILT
});

gulp.task('watch:check', function() {
  gulp.watch(appFiles, ['mocha'])
})

 /* * * * * * * * * * * * * * * * * *
        QUICK TASKS & DEFAULT
 * * * * * * * * * * * * * * * * * */

 gulp.task('jshint', ['jshint:appfiles', 'jshint:testfiles']);
 gulp.task('build', ['static:dev', 'css:dev', 'webpack:dev']);    // ADD webpack:tests WHEN CLIENT TESTS BUILT

 gulp.task('default', ['watch:build']);

