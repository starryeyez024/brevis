'use strict';


// Getting started with Gulp
// You've already got Node JS installed don't you? If not hit up nodejs.org and hit the big install button.
//
// Install Gulp globally if you haven't already:
//
// npm install --global gulp
//
// Next install all gulp dependencies declared in the package.json file. From the theme directory run:
//
// npm install
//
// which references package.json and installs the nodes listed there.
// Sweet. Gulp should be ready to go. Let's make it do work. Here's a list of the available gulp commands.
//
// gulp
// This compiles sass and runs KSS node to generate the style guide.
// gulp
//
// gulp sass
// Yup, you guessed it. This compiles sass.
// gulp sass
//
// gulp styleguide
// Runs KSS Node and generates the style guide.
// gulp styleguide
//
// gulp watch
// Watches the sass directory for changes. As soon as a file changes the sass task is fired and the css is regenerated. Live reload is also fired, so if you're using the livereload browser extension it should hot push the new css into the page.
// gulp watch
//
// gulp watch:styleguide
// Watches the sass directory for changes. As soon as a file changes the styleguide task is fired and the styleguide is rebuilt. You'll still need to refresh the styleguide page.
// gulp watch:styleguide

// If you don't have package.json run this command:
// npm install gulp gulp-ruby-sass gulp-autoprefixer gulp-livereload gulp-shell gulp-plumber kss --save-dev
// note that the --save-dev flag will write the package.json file with this list of module dependencies.

// You can and should modify the styleguide.md file in the sass folder and styleguide/Theme/index.html
// Change the page title, css links, and  header title


//////////////////////////////////////////////
// Include gulp
var gulp = require('gulp');

//////////////////////////////////////////////
// Include Our Plugins
var sass      = require('gulp-ruby-sass');
var prefix    = require('gulp-autoprefixer');
var reload    = require('gulp-livereload');
var plumber   = require('gulp-plumber');
var shell     = require('gulp-shell');
var svg2png   = require('gulp-svg2png');
//////////////////////////////////////////////
// Define a error catcher for plumber
var onError = function (err) {
  console.log(err.message);
};

// Compile Our Sass
gulp.task('sass', function() {
  gulp.src('sass/{,**/}*.{scss,sass}')
    .pipe(plumber({
      errorHandler: onError
    }))
    .pipe(sass({
        style      : 'compact',
        compass    : true,
        bundleExec : true
    }))
    .pipe(prefix(["last 2 versions", "Android 4"], { cascade: true }))
    .pipe(gulp.dest('css'));
});

//////////////////////////////////////////////
// Generate a style guide using KSS
gulp.task('styleguide', shell.task([
  // kss-node [source files to parse] [destination folder] --template [location of template files]
    'kss-node <%= source %> <%= destination %> --template <%= template %>'
  ], {
    templateData: {
      source:  'sass',
      destination: 'styleguide',
      template: 'styleguide/Theme'
    }
  }
));

//////////////////////////////////////////////
// Watch and recompile sass.
// Also fires livereload when css is changed.
gulp.task('watch', function() {

  // Watch all my sass files
  gulp.watch('sass/{,**/}*.{scss,sass}', ['sass']);

  // Create LiveReload server
  var server = reload();

  // Watch any compiled css files, reload on change
  gulp.watch(['css/*.css']).on('change', function(file) {
    server.changed(file.path);
  });

});

//////////////////////////////////////////////
// Watch and rebuild styleguide as sass is updated.
gulp.task('watch:styleguide', function() {

  // Watch all my sass files and run styleguide task.
  gulp.watch('sass/{,**/}*.{scss,sass}', ['sass', 'styleguide']);

});

// Default Task
gulp.task('default', ['sass', 'styleguide']);

//////////////////////////////////////////////
// SVG to PNG Task
//////////////////////////////////////////////


gulp.task('svg2png', function () {
    gulp.src('./images/icons/**/*.svg')
        .pipe(svg2png())
        .pipe(gulp.dest('./images/icons'));
});

