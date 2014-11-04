# Styleguide

This application is a living styleguide, generated from KSS documented styles.

## Getting started with Gulp

You've already got Node JS installed don't you? If not hit up [nodejs.org](http://nodejs.org) and hit the big install button.

Install Gulp globally if you haven't already:

> `npm install --global gulp`

Next install all gulp dependencies declared in the package.json file. From the theme directory run:

> `npm install`

Sweet. Gulp should be ready to go. Let's make it do work. Here's a list of the available gulp commands.

+ ### gulp
  This compiles sass and runs KSS node to generate the style guide.
  > `gulp`
+ ### gulp sass
  Yup, you guessed it. This compiles sass.
  > `gulp sass`
+ ### gulp styleguide
  Runs KSS Node and generates the style guide.
  > `gulp styleguide`
+ ### gulp watch
  Watches the sass directory for changes. As soon as a file changes the sass task is fired and the css is regenerated.
  Live reload is also fired, so if you're using the livereload browser extension it should hot push the new css into the page.
  > `gulp watch`
+ ### gulp watch:styleguide
  Watches the sass directory for changes. As soon as a file changes the styleguide task is fired and the styleguide is rebuilt.
  You'll still need to refresh the styleguide page.
  > `gulp watch:styleguide`
