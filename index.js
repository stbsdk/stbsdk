/**
 * @author Stanislav Kalashnik <darkpark.main@gmail.com>
 * @license GNU GENERAL PUBLIC LICENSE Version 3
 */

'use strict';

var path   = require('path'),
    extend = require('extend'),
    tasks  = require('spa-gulp/lib/tasks');


// merge configs
// spa root + stb root + user
extend(true,
    require('spa-gulp/config').default,
    require('./config').default,
    require(path.join(process.cwd(), 'gulpfile.js')).default
);

// load and create gulp tasks
tasks.register(extend(
    true, {},
    tasks.load('spa-gulp-'),
    tasks.load('stb-gulp-')
));


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
