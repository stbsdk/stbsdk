/**
 * @author Stanislav Kalashnik <darkpark.main@gmail.com>
 * @license GNU GENERAL PUBLIC LICENSE Version 3
 */

'use strict';

// use all default SPA tasks
var gulp = require('spa-gulp');


global.env.TARGET = 'stb';


// additional tasks
require('./tasks/less');
require('./tasks/open');
require('./tasks/proxy');
require('./tasks/ssh');
require('./tasks/watch');
require('./tasks/weinre');


// start all services
gulp.task('serve', ['static', 'weinre', 'proxy', 'watch', 'repl']);


// public
module.exports = gulp;
