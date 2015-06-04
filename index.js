'use strict';

var employees = require('./employees.json'),
    projects  = require('./projects.json');

/**
 * An array of employee objects with username, password, email, etc.
 * @type {object[]}
 */
module.exports.employees = cloneJSON(employees, ['dob', 'hiredOn', 'terminatedOn']);

/**
 * An array of project objects with id, name, department, etc.
 * @type {object[]}
 */
module.exports.projects = cloneJSON(projects, ['startedOn', 'endedOn']);

/**
 * Clones raw JSON data, converting date strings to Date objects.
 * @param {object[]} json
 * @param {string[]} dateFields
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
