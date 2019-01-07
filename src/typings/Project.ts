export default interface Projects {
  id: number;
  name: string;
  description: string;
  department: string;
  startedOn: Date;
  endedOn: Date | null;
  assignedOn: [string];
}
