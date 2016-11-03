'use strict';

// Start with the same data as the browser version
module.exports = require('./browser');

// But make the image paths absolute, since we're running in Node.js
var path = require('path');
module.exports.employees.forEach(function (employee) {
  employee.portrait = path.resolve(__dirname, '..', employee.portrait);
  employee.thumbnail = path.resolve(__dirname, '..', employee.thumbnail);
});
