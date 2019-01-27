import { Employee, JsonEmployee } from "./employees";
import { JsonProject, Project } from "./projects";

type PathResolver = (...segments: string[]) => string;
type ObjectOrArray = Record<string | number, unknown>;

/**
 * Enriches the raw JSON Employee objects
 * by converting date strings to Date objects and possibly resolving image paths.
 */
export function enrichEmployees(jsonEmployees: JsonEmployee[], resolvePath?: PathResolver): Employee[] {
  let employees: Employee[] = [];

  for (let jsonEmployee of jsonEmployees) {
    // Deep-clone the JSON data, so we don't modify the original objects
    // (in case the consumer wants to use both the raw and enriched objects)
    jsonEmployee = cloneDeep(jsonEmployee);
    employees.push({
      ...jsonEmployee,
      dob: new Date(jsonEmployee.dob),
      hiredOn: new Date(jsonEmployee.hiredOn),
      terminatedOn: jsonEmployee.terminatedOn ? new Date(jsonEmployee.terminatedOn) : undefined,
      portrait: resolvePath ? resolvePath(jsonEmployee.portrait) : jsonEmployee.portrait,
      thumbnail: resolvePath ? resolvePath(jsonEmployee.thumbnail) : jsonEmployee.thumbnail,
    });
  }

  return employees;
}

/**
 * Enriches the raw JSON Project objects by converting date strings to Date objects.
 */
export function enrichProjects(jsonProjects: JsonProject[]): Project[] {
  let projects: Project[] = [];

  for (let jsonProject of jsonProjects) {
    // Deep-clone the JSON data, so we don't modify the original objects
    // (in case the consumer wants to use both the raw and enriched objects)
    jsonProject = cloneDeep(jsonProject);
    projects.push({
      ...jsonProject,
      startedOn: new Date(jsonProject.startedOn),
      endedOn: jsonProject.endedOn ? new Date(jsonProject.endedOn) : undefined,
    });
  }

  return projects;
}

/**
 * Deep-clones a JSON object or array.
 */
function cloneDeep<T extends ObjectOrArray>(obj: T): T  {
  let clone: ObjectOrArray = Array.isArray(obj) ? [] : {};

  for (let [key, value] of Object.entries(obj)) {
    if (typeof value === "object" && value) {
      value = cloneDeep(value);
    }
    clone[key] = value;
  }

  return clone as T;
}
