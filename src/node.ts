import { resolve } from "path";
import { jsonEmployees } from "./employees";
import { enrichEmployees, enrichProjects } from "./enrich-json";
import { jsonProjects } from "./projects";

export { Employee, JsonEmployee } from "./employees";
export { JsonProject, Project } from "./projects";

/**
 * An array of Employee objects. Unlike the raw JSON employee data,
 * the date fields of these objects are `Date` objects rather than strings,
 * and the image paths are fully resolved.
 */
export const employees = enrichEmployees(jsonEmployees, resolve);

/**
 * An array of Project objects. Unlike the raw JSON project data,
 * the date fields of these objects are `Date` objects rather than strings.
 */
export const projects = enrichProjects(jsonProjects);
