import { Employee } from "./typings/employee";
import { Project } from "./typings/project";

// Start with the raw JSON data
import * as employeesJSON from "../employees.json";
import * as projectsJSON from "../projects.json";

// Clone the JSON data, so that the original data is left unchanged,
// and can still be accessed via require('static-mock-data/employees.json')
let employees: [Employee] = cloneDeep(employeesJSON);
let projects: [Project] = cloneDeep(projectsJSON);


// Convert JSON date strings to JavaScript Date objects
reviveDates(employees, ["dob", "hiredOn", "terminatedOn"]);
reviveDates(projects, ["startedOn", "endedOn"]);

export {
  /**
   * An array of employee objects with username, password, email, etc.
   *
   * @type {object[]}
   */
  employees,

  /**
   * An array of project objects with id, name, department, etc.
   *
   * @type {object[]}
   */
  projects
};

/**
 * Deep-clones a JSON object or array.
 *
 */

function cloneDeep(obj: any)  {
  let clone: any = Array.isArray(obj) ? [] : {};

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
 */
function reviveDates<T extends any, K>(array: T, dateFields: K[]) {
  array.forEach((obj: any) => {
    dateFields.forEach((field) => {
      const value = obj[field];
      if (value && typeof value === "string") {
        obj[field] = new Date(value);
      }
    });
  });

  return array;
}
