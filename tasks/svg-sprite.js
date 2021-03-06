const gulp = require('gulp');
const svgSprite = require('gulp-svg-sprite');
const cheerio = require('gulp-cheerio');
const replace = require('gulp-replace');

module.exports = function (options) {
  return () => {
    return gulp
      .src(`./${options.src}/icon-svg/*.svg`)
      .pipe(
        cheerio({
          run: function ($) {
            $('[style]').removeAttr('style');
          },
          parserOptions: { xmlMode: true },
        })
      )
      .pipe(replace('&gt;', '>'))
      .pipe(
        svgSprite({
          mode: {
            symbol: {
              sprite: '../sprite.svg',
            },
          },
        })
      )
      .pipe(gulp.dest(`./${options.dest}/images/sprite`));
  };
};
