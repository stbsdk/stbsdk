/**
 * @author Stanislav Kalashnik <darkpark.main@gmail.com>
 * @license GNU GENERAL PUBLIC LICENSE Version 3
 */

'use strict';

// use all default SPA tasks
var gulp = require('spa-gulp');


// additional tasks
require('./tasks/proxy');


// public
module.exports = gulp;
