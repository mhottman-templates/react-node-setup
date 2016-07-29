'use strict';
var gulp = require('gulp');
var path = require('path');

//css
var compass = require('gulp-compass'),
   autoprefixer = require('gulp-autoprefixer'),
   minify  = require('gulp-cssnano'),
   gutil = require('gulp-util'),
   rename = require('gulp-rename');

const CSS_SOURCE_DIR = path.resolve(__dirname, './app/src/styles/**/*.scss');
const CSS_BUILD_DIR = path.resolve(__dirname, './api/public/css');


gulp.task('watch', ['dev'], function() {
    gulp.watch(CSS_SOURCE_DIR, ['dev']);
});

gulp.task('dev', function() {
    return gulp.src(CSS_SOURCE_DIR)
        .pipe(compass({
            sass     : './app/src/styles',
            css      : CSS_BUILD_DIR,
            logging  : true,
            comments : true
        }))
        .on('error', function(err) {
            gutil.log("Gulp Error in 'Development Task'", err.toString());
            this.emit('end'); //resumes watch after error
        })
        .pipe(gulp.dest(CSS_BUILD_DIR))
});

gulp.task('production', function() {
    return gulp.src(CSS_SOURCE_DIR)
        .pipe(compass({
            sass     : './app/src/styles',
            css      : CSS_BUILD_DIR,
            logging  : true,
            comments : true,
        }))
        .on('error', function(err) {
            gutil.log("Gulp Error in 'Production Task'", err.toString());
            this.emit('end'); //resumes watch after error
        })
        .pipe(autoprefixer())
        .pipe(minify())
        .pipe(gulp.dest(CSS_BUILD_DIR));
});
