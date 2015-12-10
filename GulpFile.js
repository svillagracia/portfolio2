var gulp       = require('gulp');
var sass       = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');

var scss    = './css/main.scss';
var allSass = './css/partials/*.scss';
var css     = './css';

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