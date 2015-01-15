var gulp    = require('gulp');
var to5     = require('gulp-6to5');
var nodemon = require('gulp-nodemon');

gulp.task('javascript', function () {
  return gulp.src('src/arrows.js')
      .pipe(to5())
      .pipe(gulp.dest('dist'));
});

gulp.task('dev', function () {
  nodemon({ script: 'dist/arrows.js' })
    .on('change', ['javascript']);
})

gulp.task('default', ['javascript', 'dev']);
