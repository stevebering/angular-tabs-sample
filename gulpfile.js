'use strict';

var browserify = require('browserify')
  , clean = require('gulp-clean')
  , connect = require('gulp-connect')
  , eslint = require('gulp-eslint')
  , glob = require('glob')
  , gulp = require('gulp')
  , karma = require('gulp-karma')
  , mocha = require('gulp-mocha')
  , ngmin = require('gulp-ngmin')
  , source = require('vinyl-source-stream')
  , streamify = require('gulp-streamify')
  ;

/*
 * Useful tasks
 * - gulp fast
 *  - linting
 *  - unit tests
 *  - browserification
 *  - no minification, does not start server
 * - gulp watch
 *  - starts server with live reload enabled
 *  - lints, unit tests, browserifies and live reloads changes in browser
 *  - no minification
 *
 * At development time, you should usually just have 'gulp watch' running
 * in the background at all time. Does not include release preparation
*/

var liveReload = true;

gulp.task('clean', function() {
  return gulp.src(['./app/ngmin', './app/dist'], { read: false })
    .pipe(clean());
});

gulp.task('lint', function() {
  return gulp.src([
    'gulpfile.js',
    'src/**/*.js',
    'test/**/*.js',
    '!test/browserified/**',
  ])
  .pipe(eslint())
  .pipe(eslint.format());
});

gulp.task('browserify', ['lint'], /*, 'unit'],*/ function() {
  return browserify('./src/app.js', {
      debug: true
    })
    .bundle()
    .pipe(source('app.js'))
    .pipe(gulp.dest('./app/dist/'))
    .pipe(connect.reload());
});

gulp.task('server', ['browserify'], function() {
  gulp.start('server');
  gulp.watch([
    'src/**/*.js',
    'test/**/*.js',
  ], ['fast']);
});

gulp.task('fast', ['clean'], function() {
  gulp.start('browserify');
});
