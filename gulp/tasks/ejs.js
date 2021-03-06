const util = require('util');
const gulp = require('gulp');
const ejs = require('gulp-ejs');
const plumber = require('gulp-plumber');
const notify = require('gulp-notify');
const prettify = require('gulp-html-prettify');
const removeEmptyLines = require('gulp-remove-empty-lines');

const DefaultRegistry = require('undertaker-registry');

function MyRegistry () {
    DefaultRegistry.call(this);
    this.set('ejs', (done) => {
        console.log('ejs');
        gulp.src([
            `src/tpl/**/*.ejs`,
            `src/tpl/**/_*.ejs`,
        ])
            .pipe(plumber({
                errorHandler: notify.onError('Error: <%= error.message %>'),
            }))
            .pipe(ejs({}, {}, { ext: '.html' }))
            .pipe(prettify({ indent_char: ' ', indent_size: 2 }))
            .pipe(removeEmptyLines())
            .pipe(gulp.dest('dist/'));
        done();
    });
}

util.inherits(MyRegistry, DefaultRegistry);

module.exports = new MyRegistry();
