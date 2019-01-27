import { jsonEmployees } from "./employees";
import { enrichEmployees, enrichProjects } from "./enrich-json";
import { jsonProjects } from "./projects";

export { Employee, JsonEmployee } from "./employees";
export { JsonProject, Project } from "./projects";

/**
 * An array of Employee objects. Unlike the raw JSON employee data,
 * the date fields of these objects are `Date` objects rather than strings.
 */
export const employees = enrichEmployees(jsonEmployees);

/**
 * An array of Project objects. Unlike the raw JSON project data,
 * the date fields of these objects are `Date` objects rather than strings.
 */
export const projects = enrichProjects(jsonProjects);
