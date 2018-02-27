var gulp = require('gulp');
var serve = require('gulp-serve');
var watch = require('gulp-watch');

gulp.task('default', () => {
  return watch('./index.js')
        .pipe(gulp.dest('serve'))

})
gulp.task('serve', serve('.'));