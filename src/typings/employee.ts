/**
 * Interface that enforces the properties of an Employee
 */
export interface Employee {
  username: string;
  password: string;
  name: {
    first: string;
    last: string;
  };
  gender: string;
  portrait: string;
  thumbnail: string;
  email: string;
  address: {
    street: string;
    city: string;
    state: string;
    zip: string;
  };
  phones: Array<{ type: string; number: string }>;
  ssn: string;
  dob: Date;
  hiredOn: Date;
  terminatedOn: Date | null;
  department: string;
  roles: string[];
}
