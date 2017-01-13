/*
Place this file at the root of the destination.
Run 'npm install PACKAGE' for each of the packages below (ex. 'npm install gulp').


*/

var gulp = require('gulp'),
	concat = require('gulp-concat'),
	rename = require('gulp-rename'),
	uglify = require('gulp-uglify'),
	notify = require('gulp-notify'),
	replace = require('gulp-replace');

var compiledTemplates = './compiled-templates/*',
	output = './js/';

//concatenate and minify compiled Handlebars templates
gulp.task('masterTemplate', function() {
	return gulp.src(compiledTemplates)
		.pipe(concat('all-templates.js'))
		.pipe(gulp.dest(output))
		.pipe(notify({ message: 'Compiled templates have been concatenated and minified!' }));
});

//move local JSON to production JSON (URLs updated to reflect location of assets on the production server)
gulp.task('prodJSON', function() {
	return gulp.src('js/cg-json-data-local.js')
		.pipe(rename('cg-json-data-admin.js'))
		.pipe(replace('./images', 'http://purewow-static.imgix.net/2016/02_18_covergirl/images'))
		.pipe(replace('.jpg', '.jpg?auto=format,compress&cs=strip'))
		.pipe(replace('.png', '.png?auto=format,compress&cs=strip'))
		.pipe(gulp.dest('js/'))
		.pipe(notify({ message: 'cg-v2-json-data-admin.js has been updated based on local changes to cg-v2-json-data-local.js' }));
});

//move local CSS to production CSS (URLs updated to reflect location of assets on the production server)
gulp.task('prodCSS', function() {
	return gulp.src('css/merge_local.css')
		.pipe(rename('merge.css'))
		.pipe(replace('../images', 'http://purewow-static.imgix.net/2016/02_18_covergirl/images'))
		.pipe(replace('.jpg', '.jpg?auto=format,compress&cs=strip'))
		.pipe(replace('.png', '.png?auto=format,compress&cs=strip'))
		.pipe(gulp.dest('css/'))
		.pipe(notify({ message: 'merge.css has been updated based on local changes to merge_local.css' }));
});