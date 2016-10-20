var gulp          = require('gulp');
var browserSync   = require('browser-sync');
var sass          = require('gulp-sass');
var postcss       = require('gulp-postcss');
var autoprefixer  = require('autoprefixer');
var reload        = browserSync.reload;

gulp.task('sass', function () {

  var processors = [
    autoprefixer({browsers: ['last 3 versions']}),
  ];

  return gulp.src('./scss/style.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(postcss(processors))
    .pipe(gulp.dest('./css'))
    .pipe(reload({stream: true}));
});

gulp.task('default', ['sass'],function () {
  browserSync({server: './'});
  gulp.watch('./scss/**/*.scss', ['sass']);
  gulp.watch('./**/*.html', reload);
  gulp.watch('./images/**/*.*', reload);
});
