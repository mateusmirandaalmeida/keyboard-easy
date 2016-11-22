var gulp = require('gulp');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');

gulp.task('default', function() {
  gulp.watch(['./src/keyboard.js'], ['bundle-js'])
});

gulp.task('bundle-js', function() {
  gulp.src(['./src/keyboard.js'])
    .pipe(concat('keyboard.min.js'))
    .pipe(uglify())
    .pipe(gulp.dest('./dist/'))
});
