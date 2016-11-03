'use strict';

// Start with the raw JSON data
var employees = require('../employees.json');
var projects = require('../projects.json');

// Clone the JSON data, so that the original data is left unchanged,
// and can still be accessed via require('static-mock-data/employees.json')
employees = cloneDeep(employees);
projects = cloneDeep(projects);

// Convert JSON date strings to JavaScript Date objects
reviveDates(employees, ['dob', 'hiredOn', 'terminatedOn']);
reviveDates(projects, ['startedOn', 'endedOn']);

module.exports = {
  /**
   * An array of employee objects with username, password, email, etc.
   *
   * @type {object[]}
   */
  employees: employees,

  /**
   * An array of project objects with id, name, department, etc.
   *
   * @type {object[]}
   */
  projects: projects,
};

/**
 * Deep-clones a JSON object or array.
 *
 * @param {object|array} obj
 * @returns {object|array}
 */
function cloneDeep (obj) {
  var clone = Array.isArray(obj) ? [] : {};

  Object.keys(obj).forEach(function (key) {
    var value = obj[key];
    if (value && typeof value === 'object') {
      value = cloneDeep(value);
    }
    clone[key] = value;
  });

  return clone;
}

/**
 * Converts JSON date string properties to JavaScript Date objects.
 *
 * @param {object[]} array - An array of objects to revive
 * @param {string[]} dateFields - An array of field names to Convert
 * @returns {object[]}
 */
function reviveDates (array, dateFields) {
  array.forEach(function (obj) {
    dateFields.forEach(function (field) {
      var value = obj[field];
      if (value && typeof value === 'string') {
        obj[field] = new Date(value);
      }
    });
  });

  return array;
}
