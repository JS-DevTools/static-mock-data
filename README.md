Static mock data
------------------------------
Static mock data (as opposed to randomly-generated mock data) for sample apps, demos, and POCs.

[![Build Status](https://api.travis-ci.org/BigstickCarpet/static-mock-data.svg?branch=master)](https://travis-ci.org/BigstickCarpet/static-mock-data)
[![Windows Build Status](https://ci.appveyor.com/api/projects/status/github/bigstickcarpet/static-mock-data?svg=true&branch=master&failingText=Windows%20build%20failing&passingText=Windows%20build%20passing)](https://ci.appveyor.com/project/BigstickCarpet/static-mock-data/branch/master)

[![Coverage Status](https://coveralls.io/repos/BigstickCarpet/static-mock-data/badge.svg?branch=master&service=github)](https://coveralls.io/r/BigstickCarpet/static-mock-data)
[![Codacy Score](https://api.codacy.com/project/badge/Grade/6c5fcc961d4642d8a6fc48865e006233)](https://www.codacy.com/public/jamesmessinger/static-mock-data)
[![Inline docs](http://inch-ci.org/github/bigstickcarpet/static-mock-data.svg?branch=master&style=shields)](http://inch-ci.org/github/bigstickcarpet/static-mock-data)
[![Dependencies](https://david-dm.org/BigstickCarpet/static-mock-data.svg)](https://david-dm.org/BigstickCarpet/static-mock-data)

[![npm](http://img.shields.io/npm/v/static-mock-data.svg)](https://www.npmjs.com/package/static-mock-data)
[![Bower](http://img.shields.io/bower/v/static-mock-data.svg)](#bower)
[![License](https://img.shields.io/npm/l/static-mock-data.svg)](LICENSE)

[![Browser Compatibility](https://saucelabs.com/browser-matrix/mock-data.svg)](https://saucelabs.com/u/mock-data)


Features
--------------------------
* __[100 mock employees](https://raw.githubusercontent.com/BigstickCarpet/static-mock-data/master/employees.json)__, with names, addresses, phone numbers, etc.
* __[100 mock projects](https://raw.githubusercontent.com/BigstickCarpet/static-mock-data/master/projects.json)__, with names, dates, departments, employees assigned, etc.
* __[Full-size](https://github.com/BigstickCarpet/static-mock-data/blob/master/portraits/jdoe.jpg)__ and __[thumbnail](https://github.com/BigstickCarpet/static-mock-data/blob/master/portraits/jdoe-thumb.jpg)__ photos for each employee
* No dependencies
* [Tested](http://bigstickcarpet.com/static-mock-data/test/index.html) in Node.js and all modern web browsers on Mac, Windows, and Linux
* All data follows logical rules:
    - Usernames, SSNs, addresses, etc. are unique
    - Birthdates, hire dates, and termination dates are in proper chronological order
    - Employee roles "make sense" (e.g. "full time" and "part time" are mutually exclusive)
    - Employees are only assigned to projects in their own department
    - Employees are only assigned to projects that occurred during their employment


Usage in Node.js
-------------------------------------
Install via [NPM](https://docs.npmjs.com/getting-started/what-is-npm):

````bash
npm install static-mock-data
````

The mock data can be used as plain JSON or as JavaScript arrays of objects.

##### Raw JSON
```javascript
var employeeJSON = require('static-mock-data/employees.json');
employeeJSON.forEach(function(employee) {
  console.log(employee.dob);        // string (in ISO 8601 zulu format)
  console.log(employee.portrait);   // relative file path
});
```

##### JavaScript Objects
```javascript
var mockData = require('static-mock-data');
mockData.employees.forEach(function(employee) {
  console.log(employee.dob);        // Date object
  console.log(employee.portrait);   // absolute file path
});
```

Usage in Web Browsers
-----------------------------------------
Install via [Bower](http://bower.io):

````bash
bower install static-mock-data
````

The mock data can be used as plain JSON (via [`jQuery.getJSON()`](https://api.jquery.com/jquery.getjson/)) or as JavaScript arrays of objects.

##### Raw JSON
```javascript
$.getJSON("bower_components/static-mock-data/employees.json", function(employeeJSON) {
  employeeJSON.forEach(function(employee) {
    console.log(employee.dob);    // string (in ISO 8601 zulu format)
  });
});
```


##### JavaScript Objects
```html
<script src="bower_components/static-mock-data/dist/static-mock-data.min.js"></script>
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


Contributing
--------------------------
I welcome any contributions, enhancements, and bug-fixes.  [File an issue](https://github.com/BigstickCarpet/static-mock-data/issues) on GitHub and [submit a pull request](https://github.com/BigstickCarpet/static-mock-data/pulls).

#### Building
To build the project locally on your computer:

1. __Clone this repo__<br>
`git clone https://github.com/bigstickcarpet/static-mock-data.git`

2. __Install dependencies__<br>
`npm install`

3. __Run the build script__<br>
`npm run build`

4. __Run the tests__<br>
`npm test`


License
--------------------------
All JSON data is [MIT licensed](http://opensource.org/licenses/MIT) and can be used however you want.

All images (employee portraits) are licensed under [Creative Commons BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/2.0/deed.en) and have some limitations on their use.

See the [LICENSE file](LICENSE) for more details.
