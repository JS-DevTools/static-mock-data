/**
 * Interface that enforces the properties of an project
 */
export interface Project {
  id: number;
  name: string;
  description: string;
  department: string;
  startedOn: Date;
  endedOn: Date | null;
  assignedOn: string[];
}
