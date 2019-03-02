const gulp = require('gulp');
const clean = require('./gulp/tasks/clean.js');
const script = require('./gulp/tasks/script.js');
const ejs = require('./gulp/tasks/ejs.js');
const serve = require('./gulp/tasks/serve.js');
const watch = require('./gulp/tasks/watch.js');

gulp.registry(clean);
gulp.registry(script);
gulp.registry(ejs);
gulp.registry(serve);
gulp.registry(watch);

gulp.task('default', gulp.series(
    'clean',
    gulp.parallel(
        'script',
        'ejs'
    ),
    gulp.parallel(
        'serve',
        'watch'
    )
));
