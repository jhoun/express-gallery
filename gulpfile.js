const gulp = require('gulp');
const sass = require('gulp-sass');
const connect = require('gulp-connect');
const nodemon = require('gulp-nodemon');
const child_process = require('child_process');


gulp.task('connect', function(){
  connect.server({
    root: 'public',
    livereload: true
  });
});

// keeps gulp from crashing for scss errors
gulp.task('sass', function () {
  return gulp.src('./sass/*.scss')
      .pipe(sass({ errLogToConsole: true }))
      .pipe(gulp.dest('./public/css'));
});

gulp.task('livereload', function (){
  gulp.src('./views/**/*')
  .pipe(connect.reload());
});

gulp.task('watch', function () {
  gulp.watch('./sass/*.scss', ['sass']);
  gulp.watch('./public/**/*', ['livereload']);
});

gulp.task('start', function () {
  nodemon({
    script: 'server.js'
  , ext: 'js html'
  , env: { 'NODE_ENV': 'development' }
  })
})

gulp.task('redis-start', function() {
  child_process.exec('redis-server', function(err, stdout, stderr) {
    console.log(stdout);
    if (err !== null) {
      console.log('exec error: ' + err);
    }
  });
});


gulp.task('default', ['connect', 'watch', 'sass', 'start',
'redis-start']);