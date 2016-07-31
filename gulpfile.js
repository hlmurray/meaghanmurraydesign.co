var gulp = require('gulp');
var sass = require('gulp-ruby-sass');

gulp.task('default', function() {
    return sass('scss/styles.scss')
      .on('error', sass.logError)
      .pipe(gulp.dest('css'));
});
