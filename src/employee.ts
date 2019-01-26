/**
 * A raw Employee record, directly from the "employees.json" file
 */
export interface JsonEmployee extends EmployeeBase {
  dob: string;
  hiredOn: string;
  terminatedOn?: string;
}

/**
 * An Employee record, as exposed by the Static Mock Data API
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
    number: string
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
