/**!
 * Mock Data v3.0.9
 *
 * @link https://github.com/BigstickCarpet/mock-data
 * @license MIT
 */
'use strict';

var employees = require('../employees.json'),
    projects  = require('../projects.json'),
    path      = require('path');

/**
 * An array of employee objects with username, password, email, etc.
 *
 * @type {object[]}
 */
module.exports.employees = absolutePaths(cloneJSON(employees, ['dob', 'hiredOn', 'terminatedOn']));

/**
 * An array of project objects with id, name, department, etc.
 *
 * @type {object[]}
 */
module.exports.projects = cloneJSON(projects, ['startedOn', 'endedOn']);

/**
 * Clones raw JSON data, converting date strings to Date objects.
 *
 * @param {object[]} json - JSON data
 * @param {string[]} dateFields - The date fields that should be converted from strings to Date objects
 * @returns {object[]}
 */
function cloneJSON(json, dateFields) {
  var results = [];

  json.forEach(function(obj) {
    var clone = {};
    results.push(clone);

    Object.keys(obj).forEach(function(key) {
      if (typeof(obj[key]) === 'string' && dateFields.indexOf(key) >= 0) {
        clone[key] = new Date(obj[key]);
      }
      else {
        clone[key] = obj[key];
      }
    });
  });

  return results;
}

/**
 * Makes the image paths absolute.
 *
 * @param {object[]} employees - Array of Employee objects
 */
function absolutePaths(employees) {
  if (!process.browser) {
    employees.forEach(function(employee) {
      employee.portrait = path.resolve(__dirname, '..', employee.portrait);
      employee.thumbnail = path.resolve(__dirname, '..', employee.thumbnail);
    });
  }

  return employees;
}
