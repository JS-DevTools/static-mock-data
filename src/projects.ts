// @ts-ignore - Prevent TypeScript from copying the JSON file to the output folder
import jsonProjects from "../projects.json";
import { deepClone } from "./deep-clone";

/**
 * An array of Project objects. Unlike the raw JSON project data,
 * the date fields of these objects are `Date` objects rather than strings.
 */
export const projects: Project[] = [];

for (let jsonProject of jsonProjects as JsonProject[]) {
  // Deep-clone the JSON data, so we don't modify the original objects
  // (in case the consumer wants to use both the raw and enriched objects)
  jsonProject = deepClone(jsonProject);

  projects.push(Object.assign({}, jsonProject, {
    startedOn: new Date(jsonProject.startedOn),
    endedOn: jsonProject.endedOn ? new Date(jsonProject.endedOn) : undefined,
  }));
}

/**
 * A raw Project object, directly from the "projects.json" file
 */
export interface JsonProject extends ProjectBase {
  startedOn: string;
  endedOn?: string;
}

/**
 * A Project object, as exposed by the Static Mock Data API
 */
export interface Project extends ProjectBase {
  startedOn: Date;
  endedOn?: Date;
}

/**
 * The common fields between Project and JsonProject
 */
export interface ProjectBase {
  id: number;
  name: string;
  department: string;
  assigned: string[];
  description: string;
}
