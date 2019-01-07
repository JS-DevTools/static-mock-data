"use strict";

// Start with the raw JSON data

import Employee from "./typings/Employee";
import Project from "./typings/Project";

let employees:Employee = require("../employees.json");
let projects:Project = require("../projects.json");

// Clone the JSON data, so that the original data is left unchanged,
// and can still be accessed via require('static-mock-data/employees.json')
employees = cloneDeep(employees);
projects = cloneDeep(projects);

// Convert JSON date strings to JavaScript Date objects
reviveDates(employees, ["dob", "hiredOn", "terminatedOn"]);
reviveDates(projects, ["startedOn", "endedOn"]);

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

function cloneDeep(obj:any)  {
  let clone:any = Array.isArray(obj) ? [] : {};

  Object.keys(obj).forEach((key) => {
    let value = obj[key];
    if (value && typeof value === "object") {
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
function reviveDates(array:any, dateFields:Array<string>) {
  array.forEach((obj:any) => {
    dateFields.forEach((field) => {
      const value = obj[field];
      if (value && typeof value === "string") {
        obj[field] = new Date(value);
      }
    });
  });

  return array;
}
