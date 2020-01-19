'use strict';
 
var gulp = require('gulp');
var sass = require('gulp-sass');
var cleanCSS = require('gulp-clean-css');
var rename = require('gulp-rename');
var dist = './css'
 
sass.compiler = require('node-sass');
 
gulp.task('sass', function () {
  return gulp.src('./sass/*.sass')
    .pipe(sass().on('error', sass.logError))
    .pipe(cleanCSS({compatibility: 'ie8'}))
      .pipe(rename({
        suffix: '.min'
      }))
    .pipe(gulp.dest('css'));
});
 
gulp.task('minify-css', () => {
    return gulp.src('./css/*.css')
      .pipe(cleanCSS({compatibility: 'ie8'}))
      .pipe(rename({
        suffix: '.min'
      }))
      .pipe(gulp.dest('css'));
  });

gulp.task('sass:watch', function () {
  gulp.watch('./sass/*.sass',  gulp.series('sass'));
});

gulp.task('default', gulp.series(['sass', 'sass:watch']))