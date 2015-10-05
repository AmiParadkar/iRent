var gulp = require('gulp')
 ,sourcemaps = require('gulp-sourcemaps')
 ,concat = require('gulp-concat')
 ,jshint = require('gulp-jshint')
 ,uglify = require('gulp-uglify')
 ,minifyCSS = require('gulp-minify-css')
 ,plumber = require('gulp-plumber')
 ,less = require('gulp-less')
 ,gutil = require('gulp-util')
 ,rename = require("gulp-rename")
 ,shell = require("gulp-shell")

var jsFiles = 'js/**/*.js',
  lessFiles = 'css/' + '*.less',
  vendorDir = "bower_components/**/",
  vendorJsFiles = vendorDir + '*.min.js',
  vendorCssFiles = vendorDir + '*.min.css',
  buildDir = "./static";

gulp.task('vendor.scripts', function() {
  // place code for your default task here
  return gulp.src([
      'bower_components/angular/angular.min.js'
      ,'bower_components/angular-route/angular-route.min.js'
      ,'bower_components/jquery/dist/jquery.min.js'
      ,'bower_components/bootstrap/dist/js/bootstrap.min.js'
      ,'bower_components/moment/min/moment.min.js'
      ,'bower_components/lodash/lodash.min.js'
    ])
    .pipe(jshint())
    .pipe(concat('vendor.js'))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest(buildDir + '/js'));
});

gulp.task('app.scripts', function() {
  // place code for your default task here
  return gulp.src([
    'js/index.js'
    ,'js/app.js'
    ,'js/controllers/*.js'
    ,'js/services/*.js'
    ])
    .pipe(jshint())
    .pipe(sourcemaps.init())
    .pipe(uglify().on('error', gutil.log))
    .pipe(concat('irent.js'))
    .pipe(gulp.dest(buildDir + '/js'));
});

gulp.task('vendor.css', function() {
  // place code for your default task here
  return gulp.src(vendorCssFiles)
    .pipe(concat('vendor.css'))
    .pipe(minifyCSS({
      keepSpecialComments: 0
    }))
    .pipe(gulp.dest(buildDir + '/css'));
});

gulp.task('app.less', function() {
  gulp.src(lessFiles)
    .pipe(plumber())
    .pipe(less())
    .pipe(minifyCSS({
      keepSpecialComments: 0
    }))
    .pipe(gulp.dest(buildDir + '/css'));
});

gulp.task('run', shell.task([
  'cordova build ios',
]))


// Rerun the task when a file changes
gulp.task('watch', function() {
  gulp.watch(jsFiles, ['app.scripts']);
  gulp.watch(lessFiles, ['app.less']);
});

gulp.task('default', ['vendor.css', 'app.less','vendor.scripts', 'app.scripts', 'watch']);
gulp.task('prod', ['vendor.css', 'app.less', 'vendor.scripts', 'app.scripts']);
