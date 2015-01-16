var gulp    = require('gulp');
var to5     = require('gulp-6to5');
var nodemon = require('gulp-nodemon');

gulp.task('javascript', function () {
  return gulp.src('src/*.js')
      .pipe(to5())
      .pipe(gulp.dest('dist'));
});

gulp.task('dev', function () {
  nodemon({ script: 'dist/classes.js' })
    .on('change', ['javascript']);
})

gulp.task('default', ['javascript', 'dev']);
