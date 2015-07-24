Mock Data
============================
#### Mock data for sample apps, demos, and POCs

[![Build Status](https://api.travis-ci.org/BigstickCarpet/mock-data.svg)](https://travis-ci.org/BigstickCarpet/mock-data)
[![Dependencies](https://david-dm.org/BigstickCarpet/mock-data.svg)](https://david-dm.org/BigstickCarpet/mock-data)
[![Coverage Status](https://coveralls.io/repos/BigstickCarpet/mock-data/badge.svg?branch=master&service=github)](https://coveralls.io/r/BigstickCarpet/mock-data)
[![Inline docs](http://inch-ci.org/github/bigstickcarpet/mock-data.svg?branch=master&style=shields)](http://inch-ci.org/github/bigstickcarpet/mock-data)

[![npm](http://img.shields.io/npm/v/@bigstickcarpet/mock-data.svg)](https://www.npmjs.com/package/@bigstickcarpet/mock-data)
[![Bower](http://img.shields.io/bower/v/mock-data.svg)](#bower)
[![License](https://img.shields.io/npm/l/@bigstickcarpet/mock-data.svg)](LICENSE)


Features
--------------------------
* No dependencies
* Supports Node.js and all web browsers
* 100 mock employees, with names, addresses, phone numbers, etc.
* 100 mock projects, with names, dates, departments, employees assigned, etc.
* Full-size and thumbnail photos for each employee
* All data follows logical rules:
    - Usernames, SSNs, addresses, etc. are unique
    - Birthdates, hire dates, and termination dates are in proper chronological order
    - Employee roles "make sense" (e.g. "full time" and "part time" are mutually exclusive)
    - Employees are only assigned to projects in their own department
    - Employees are only assigned to projects that occurred during their employment


Installation &amp; Usage
--------------------------

### Node
Install via [NPM](https://docs.npmjs.com/getting-started/what-is-npm):

````bash
npm install @bigstickcarpet/mock-data
````

The mock data can be used as plain JSON or as JavaScript arrays of objects.

##### Raw JSON
```javascript
var employeeJSON = require('@bigstickcarpet/mock-data/employees.json');
employeeJSON.forEach(function(employee) {
  console.log(employee.dob);    // string (in ISO 8601 zulu format)
});
```

##### JavaScript Objects
```javascript
var mockData = require('@bigstickcarpet/mock-data');
mockData.employees.forEach(function(employee) {
  console.log(employee.dob);    // Date object
});
```

### Web Browsers
Install via [Bower](http://bower.io):

````bash
bower install mock-data
````

The mock data can be used as plain JSON (via [`jQuery.getJSON()`](https://api.jquery.com/jquery.getjson/)) or as JavaScript arrays of objects.

##### Raw JSON
```javascript
$.getJSON("bower_components/mock-data/employees.json", function(employeeJSON) {
  employeeJSON.forEach(function(employee) {
    console.log(employee.dob);    // string (in ISO 8601 zulu format)
  });
});
```


##### JavaScript Objects
```html
<script src="bower_components/mock-data/dist/mock-data.min.js"></script>
<script>
  mock.data.employees.forEach(function(employee) {
    console.log(employee.dob);    // Date object
  });
</script>
```


Employees
--------------------------
`mockData.employees` is an array of objects with the following properties:

| Property              | Data Type        | Description
|:----------------------|:-----------------|:----------------------------
| `username`            | string           | A alphanumeric username that is unique for each employee
| `password`            | string           | An alphanumeric password
| `name.first`          | string           | First name
| `name.last`           | string           | Last name
| `gender`              | string           | "male" or "female"
| `portrait`            | string           | The path of the full-size portrait photo
| `thumbnail`           | string           | The path of the thumbnail-size portrait photo
| `email`               | string           | Email address
| `address.street`      | string           | House number and street name
| `address.city`        | string           | City name
| `address.state`       | string           | U.S. state name (full name, not abbreviation)
| `address.zip`         | string           | U.S. zip code, in the format #####
| `phones`              | array of objects | Array of phone objects
| `phones[].type`       | string           | "home", "office", or "cell"
| `phones[].number`     | string           | Phone number, in the format ###-##-####
| `ssn`                 | string           | U.S. Social Security Number, in the format ###-##-####. Unique for each employee.
| `dob`                 | Date             | Date of birth
| `hiredOn`             | Date             | Date the employee was hired
| `terminatedOn`        | Date or null     | Date the employee was terminated, or `null` if still employed
| `department`          | string           | "Accounting", "Sales", "Human Resources", or "Marketing"
| `roles`               | array of strings | Array of roles, such as "employee", "consultant", "part time", etc.


Projects
--------------------------
`mockData.projects` is an array of objects with the following properties:

| Property              | Data Type        | Description
|:----------------------|:-----------------|:----------------------------
| `id`                  | number           | Numeric ID that is unique for each project
| `name`                | string           | Project name that is unique for each project. 55 characters max.
| `description`         | string           | Long project description. 2000 characters max
| `department`          | string           | "Accounting", "Sales", "Human Resources", or "Marketing"
| `startedOn`           | Date             | Date that the project started
| `endedOn`             | Date or null     | Date that the project ended, or `null` if still ongoing
| `assigned`            | array of strings | Array of usernames of employees who are assigned to the project. Projects will only have employees from the same department.


License
--------------------------
All JSON data is [MIT licensed](http://opensource.org/licenses/MIT) and can be used however you want.

All images (employee portraits) are licensed under [Creative Commons BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/2.0/deed.en) and have some limitations on their use.

See the [LICENSE file](LICENSE) for more details.
