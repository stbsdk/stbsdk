/**
 * @author Stanislav Kalashnik <darkpark.main@gmail.com>
 * @license GNU GENERAL PUBLIC LICENSE Version 3
 */

'use strict';

// use all default SPA tasks
var gulp = require('spa-gulp');


// additional tasks
require('./tasks/open');
require('./tasks/proxy');
require('./tasks/watch');


// start all services
gulp.task('serve', ['static', 'weinre', 'proxy', 'watch', 'repl']);


// public
module.exports = gulp;
