/**
 * Establish our gulp/node plugins for this project.
 * We're keeping it _extremely_ minimal. A real-life
 * gulpfile would never be this bare bones.
 */
var gulp			= require('gulp'),
	sass			= require('gulp-ruby-sass');

/**
 * Build a task to compile our Sass into CSS
 */
gulp.task('styles', function() {
	return gulp.src(src_sass + '/*.scss')
		.pipe( sass( {
			errLogToConsole: true
		} ) )
		.pipe( gulp.dest( dest_theme_css ) );
});


/**
 * As there is only one task, the default task only references the "styles" task
 */
gulp.task('default', function() {
	gulp.start('styles');
});


/**
 * Watch our Sass files, and do things when they change.
 */
gulp.task('watch', function() {
	gulp.watch( src_sass + '/**/*.scss', ['styles'] );
});
