const gulp = require('gulp');
const gzip = require('gulp-gzip');

gulp.task('compress', function () {
  return gulp.src(['./public/**/*.*']).pipe(gzip()).pipe(gulp.dest('./public'));
});
