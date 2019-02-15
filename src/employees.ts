// @ts-ignore - Prevent TypeScript from copying the JSON file to the output folder
import jsonEmployees from "../employees.json";
import { deepClone } from "./deep-clone";
import { resolve } from "./node";

/**
 * An array of Employee objects. Unlike the raw JSON employee data,
 * the date fields of these objects are `Date` objects rather than strings,
 * and the image paths are fully resolved.
 */
export const employees: Employee[] = [];

for (let jsonEmployee of jsonEmployees as JsonEmployee[]) {
  // Deep-clone the JSON data, so we don't modify the original objects
  // (in case the consumer wants to use both the raw and enriched objects)
  jsonEmployee = deepClone(jsonEmployee);

  employees.push(Object.assign({}, jsonEmployee, {
    dob: new Date(jsonEmployee.dob),
    hiredOn: new Date(jsonEmployee.hiredOn),
    terminatedOn: jsonEmployee.terminatedOn ? new Date(jsonEmployee.terminatedOn) : undefined,
    portrait: resolve(jsonEmployee.portrait),
    thumbnail: resolve(jsonEmployee.thumbnail),
  }));
}

/**
 * A raw Employee object, directly from the "employees.json" file
 */
export interface JsonEmployee extends EmployeeBase {
  dob: string;
  hiredOn: string;
  terminatedOn?: string;
}

/**
 * An Employee object, as exposed by the Static Mock Data API
 */
export interface Employee extends EmployeeBase {
  dob: Date;
  hiredOn: Date;
  terminatedOn?: Date;
}

/**
 * The common fields between Employee and JsonEmployee
 */
interface EmployeeBase {
  username: string;
  password: string;
  name: {
    first: string;
    last: string;
  };
  ssn: string;
  email: string;
  phones: Array<{
    type: string;
    number: string;
  }>;
  address: {
    street: string;
    city: string;
    state: string;
    zip: string;
  };
  roles: string[];
  department: string;
  gender: string;
  portrait: string;
  thumbnail: string;
}
