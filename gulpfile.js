/*
/////////////////////////////////////////////////////////////////////////////////
DESTINATION GULP TASKS///////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////
Gulp tasks for getting CSS and Data files production-ready and combining compiled Handlebars templates. 
The tasks work but there are many areas for cleanup/refactor. Feel free to jump in and make updates.

The tasks were written assuming the directory structure and filenames are:

desti/
	css/
		style.css.scss
		style_local.css
		style_prod.css
	js/
		all_templates.js
		data_local.js
		data_prod.js
	templates/
		some_template.handlebars
		another_template.handlebars	
	compiled-templates/
		some_template.js
		another_template.js
	images/
		some_image.jpg
		another_image.png
	home.html
	gulpfile.js

///////////////////////////////////////////////////////////////////////////////////
Instructions///////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////
1. Copy the package.json file in the root of the destinations repository to the root of your destination directory.

2. Run 'npm install' in that same directory.

3. Update the variables in the File & Directory Names section below to match what you're using in your destination.

4. Gulp tasks are now ready.
	a. Run 'gulp masterTemplate' for combining compiled Handlebars templates into one templates file.  You can run this whenever.
	b. Run 'gulp watch' to watch for changes in your local CSS and Data (JSON) files. DON'T RUN THIS UNTIL YOU'VE UPLOADED YOUR IMAGES TO ADMIN!!!
		- This will run in the background and continuously update your production-copies of the CSS and Data 
		  files whenever you save your local CSS and Data files.
*/

//Required Packages
var gulp = require('gulp'),
	concat = require('gulp-concat'),
	rename = require('gulp-rename'),
	uglify = require('gulp-uglify'),
	notify = require('gulp-notify'),
	replace = require('gulp-replace');

//File & Directory Names
var compiledTemplates = './compiled-templates/*',
	allTemplates = 'all_templates.js', 
	localData = 'js/data_local.js',
	prodData = 'data_prod.js',
	jsOutput = './js/',

	localCSS = 'css/style_local.css',
	prodCSS = 'style_prod.css',
	cssOutput = './css',

	images = /\.+(\/images)/g,
	
	/*
	The URL below can be found in the destination Admin entry, under the "Additional Tab" and above the "Upload Zip File" button in that tab.
	'images01' replaces 'prodstatics3azcdn1' in the URL that the admin zip path gives us:
	Ex. Admin Zip Path - http://prodstatics3azcdn1.purewow.com/static/2016/21768/
			imgix Path - http://images01.purewow.com/static/2016/21768/

	You'll also need to append the path to your destination's images directory to the end of the URL:
	Ex. http://images01.purewow.com/static/2016/21768/baileys-201610/images'
	*/
	imgixUrl = 'http://images01.purewow.com/static/2016/21768/baileys-201610/images';

//watch for changes to local CSS and Data (JSON) files
gulp.task('watch', function() {
	// gulp.watch([localData, localCSS], ['prodData', 'prodCSS']);
	gulp.watch(localData, ['prodData']);
	gulp.watch(localCSS, ['prodCSS']);
});

//combine compiled Handlebars templates
gulp.task('masterTemplate', function() {
	return gulp.src(compiledTemplates)
		.pipe(concat(allTemplates))
		.pipe(gulp.dest(jsOutput))
		.pipe(notify({ message: 'Handlebars template file is ready!' }));
});

//move local Data to production Data (URLs updated to reflect location of assets on the production server)
gulp.task('prodData', function() {
	return imgixify(localData, prodData, jsOutput);
});

//move local CSS to production CSS (URLs updated to reflect location of assets on the production server)
gulp.task('prodCSS', function() {
	return imgixify(localCSS, prodCSS, cssOutput);
});

function imgixify(local, prod, output) {
	return gulp.src(local)
		   .pipe(rename(prod))
		   .pipe(replace(images, imgixUrl))
		   .pipe(replace('.jpg', '.jpg?auto=format,compress&cs=strip'))
		   .pipe(replace('.png', '.png?auto=format,compress&cs=strip'))
		   .pipe(gulp.dest(output))
		   .pipe(notify({ message: prod + ' is ready!' }));
}


