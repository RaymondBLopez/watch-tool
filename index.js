#!/usr/bin/env node
const chokidar = require('chokidar');
const debounce = require('lodash.debounce');
const program = require('caporal');

const start = debounce(() => {
  console.log('Starting Users program');
}, 100);

chokidar
  .watch('.')
  .on('add', start)
  .on('change', () => console.log('File changed'))
  .on('unlink', () => console.log('File unlinked'));
