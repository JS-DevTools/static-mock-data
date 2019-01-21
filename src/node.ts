// Start with the same data as the browser version
import {employees, projects} from "./browser";

// But make the image paths absolute, since we're running in Node.js
import * as path from "path";

employees.forEach(function (employee:any) {
  employee.portrait = path.resolve(__dirname, "../..", employee.portrait);
  employee.thumbnail = path.resolve(__dirname, "../..", employee.thumbnail);
});

export {
  employees,
  projects
}
