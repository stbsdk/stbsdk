#!/usr/bin/env node

/**
 * @author Stanislav Kalashnik <darkpark.main@gmail.com>
 * @license GNU GENERAL PUBLIC LICENSE Version 3
 */

'use strict';

var app    = require('../index'),
    debug  = require('debug')('app:cli'),
    runner = app.runner,
    tasks  = process.argv.slice(2);

// add main task
if ( !tasks.length ) {
    tasks.push('default');
}

debug('tasks to execute', tasks);

runner.run(runner.serial.apply(runner, tasks));
