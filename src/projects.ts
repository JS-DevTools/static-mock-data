// @ts-ignore - TypeScript can't find this file because it's not in the src directory
import json from "../projects.json";

/**
 * An array of raw Project objects, directly from the "projects.json" file.
 */
export const jsonProjects = json as JsonProject[];

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
  assignedOn: string[];
  description: string;
}
