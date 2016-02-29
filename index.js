/**
 * @author Stanislav Kalashnik <darkpark.main@gmail.com>
 * @license GNU GENERAL PUBLIC LICENSE Version 3
 */

'use strict';

global.DEBUG = true;

var app    = require('spasdk/lib/app'),
    runner = app.runner;

console.log(process.env);

app.init({
    //tasks: process.argv.slice(2),
    //plugins: Object.keys(require('./package.json').optionalDependencies)
    plugins: [
        'spa-plugin-jade',
        'spa-plugin-livereload',
        'spa-plugin-static',
        'spa-plugin-wamp',
        'spa-plugin-webui',
        'stb-plugin-sass',
        'stb-plugin-webpack'
    ]
});


runner.task('build', runner.serial('jade:build', 'webpack:build', 'sass:cache', 'sass:build'));

runner.task('watch', runner.parallel(
    'jade:watch:develop',
    'webpack:watch:develop',
    'sass:cache:watch:develop',
    'sass:build:watch:develop'
));

runner.task('serve', runner.parallel(
    'static:serve:develop',
    'wamp:serve:default',
    'webui:serve:default',
    'livereload:watch:default'
));

runner.task('default', runner.serial('build', runner.parallel('watch', 'serve')));

//runner.run('default');

// public
module.exports = app;


/*var path   = require('path'),
    extend = require('extend'),
    tasks  = require('spasdk/lib/tasks');


// enable colors in console
require('tty-colors');


// merge configs
// spa root + stb root + user
extend(true,
    require('spasdk/config').default,
    require('./config').default,
    require(path.join(process.cwd(), 'gulpfile.js')).default
);

// load and create gulp tasks
tasks.register(extend(
    true, {},
    tasks.load('spa-gulp-'),
    tasks.load('stb-gulp-')
));*/


// use all default SPA tasks
//var gulp = require('spa-gulp');


//process.env.TARGET = 'stb';
//
//
//// additional tasks
//require('./tasks/less');
//require('./tasks/open');
//require('./tasks/proxy');
//require('./tasks/ssh');
//require('./tasks/watch');
//require('./tasks/weinre');
//
//
//// start all services
//gulp.task('serve', ['static', 'weinre', 'proxy', 'watch', 'repl']);
//
//
//// public
//module.exports = gulp;
