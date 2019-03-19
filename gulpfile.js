const gulp = require('gulp'),
sass = require('gulp-sass'),
server = require('browser-sync').create();

function css() {
  return gulp.src('./style.scss')
    .pipe(sass())
    .pipe(gulp.dest('./'))
    .pipe(server.reload({stream:true}))
}

function reload(done) {
  server.reload();
  done();
}

function serve(done) {
  server.init({
    server: './'
  });
  done();
}

function watch(){
  gulp.watch('./*.html', reload)
  gulp.watch('./style.scss', css)
}

const build = gulp.series(css);
const dev = gulp.series(css, serve, watch);

exports.build = build;
exports.default = dev;
