var gulp = require('gulp');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var browserSync = require('browser-sync').create();

gulp.task('serve', gulp.series(function(done) {

    browserSync.init({
        server: {
            baseDir: "app"
        }
    });

    gulp.watch("app/scss/*.scss", gulp.series('sass'));
    gulp.watch("app/*.html").on('change', browserSync.reload);

    done();
}));


gulp.task('sass', gulp.series(function(done) {
	return gulp.src('app/scss/style.scss')
		.pipe(sass({
			outputStyle: 'compressed'
		}))
        .pipe(autoprefixer({
            browsers: ['last 20 versions'],
            cascade: true
        }))
		.pipe(gulp.dest('app'))
        .pipe(browserSync.stream());
        done();
}));

gulp.task('default', gulp.parallel('serve', function () {
    gulp.series('serve')
}));