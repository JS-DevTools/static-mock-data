/**
 * A raw Project record, directly from the "projects.json" file
 */
export interface JsonProject extends ProjectBase {
  startedOn: string;
  endedOn?: string;
}

/**
 * A Project record, as exposed by the Static Mock Data API
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
