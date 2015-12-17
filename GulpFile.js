var gulp       = require('gulp');
var sass       = require('gulp-sass');
var uglify     = require('gulp-uglify');
var minify     = require('gulp-minify');
var sourcemaps = require('gulp-sourcemaps');
var strip      = require('gulp-strip-comments');
var ngAnnotate = require('gulp-ng-annotate')
var concat     = require('gulp-concat');
var bytediff   = require('gulp-bytediff');

var jsSource  = ['./src/js/app/app.js', './src/js/app/controllers/*.js' ];
var jsOut     = './build/js';
var scss      = './src/css/main.scss';
var allSass   = './src/css/partials/*.scss';
var css       = './build/css';

gulp.task('transpile-js', function() {
  gulp.src(jsSource)
    .pipe(sourcemaps.init())
    .pipe(concat('app.js', {newLine: ';'}))
    .pipe(strip())
    .pipe(ngAnnotate())
    .pipe(bytediff.start())
    .pipe(uglify({mangle: true}))
    .pipe(bytediff.stop(function (data) {
      var difference = (data.savings > 0) ? ' smaller.' : ' larger.';
      return data.fileName + ' is ' + data.percent + '%' + difference;
    }))
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest(jsOut))
});

gulp.task('sass-compile', function() {
  gulp.src(scss)
    .pipe(sourcemaps.init())
    .pipe(sass().on('error', sass.logError))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest(css));
});

gulp.task('watch-sass', function() {
  gulp.watch(allSass, ['sass-compile']);
})