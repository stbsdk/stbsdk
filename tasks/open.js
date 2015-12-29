/**
 * Open the default web browser with the given page.
 *
 * @author Stanislav Kalashnik <darkpark.main@gmail.com>
 * @license GNU GENERAL PUBLIC LICENSE Version 3
 */

'use strict';

var util = require('util'),
    path = require('path'),
    gulp = require('gulp'),
    open = require('open'),
    load = require('require-nocache')(module),
    cfg  = path.join(process.env.PATH_CFG, 'weinre');


// weinre main page
gulp.task('open:weinre', function () {
    open(util.format(
        'http://localhost:%s/client/#anonymous',
        load(cfg).port
    ));
});
