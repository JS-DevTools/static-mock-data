Static mock data
==============================
Static mock data (as opposed to randomly-generated mock data) for sample apps, demos, and POCs.

[![Build Status](https://github.com/JS-DevTools/static-mock-data/workflows/CI-CD/badge.svg)](https://github.com/JS-DevTools/static-mock-data/actions)
[![Coverage Status](https://coveralls.io/repos/github/JS-DevTools/static-mock-data/badge.svg?branch=master)](https://coveralls.io/github/JS-DevTools/static-mock-data)

[![npm](https://img.shields.io/npm/v/@jsdevtools/static-mock-data.svg)](https://www.npmjs.com/package/@jsdevtools/static-mock-data)
[![Dependencies](https://david-dm.org/JS-DevTools/static-mock-data.svg)](https://david-dm.org/JS-DevTools/static-mock-data)
[![License](https://img.shields.io/npm/l/@jsdevtools/static-mock-data.svg)](LICENSE)

[![OS and Browser Compatibility](https://jstools.dev/img/badges/ci-badges.svg)](https://github.com/JS-DevTools/static-mock-data/actions)



Features
--------------------------
* __[100 mock employees](https://raw.githubusercontent.com/JS-DevTools/static-mock-data/master/employees.json)__, with names, addresses, phone numbers, etc.
* __[100 mock projects](https://raw.githubusercontent.com/JS-DevTools/static-mock-data/master/projects.json)__, with names, dates, departments, employees assigned, etc.
* __[Full-size](https://github.com/JS-DevTools/static-mock-data/blob/master/portraits/jdoe.jpg)__ and __[thumbnail](https://github.com/JS-DevTools/static-mock-data/blob/master/portraits/jdoe-thumb.jpg)__ photos for each employee
* No dependencies
* Tested in Node.js and all modern web browsers on Mac, Windows, and Linux
* All data follows logical rules:
    - Usernames, SSNs, addresses, etc. are unique
    - Birthdates, hire dates, and termination dates are in proper chronological order
    - Employee roles "make sense" (e.g. "full time" and "part time" are mutually exclusive)
    - Employees are only assigned to projects in their own department
    - Employees are only assigned to projects that occurred during their employment



Installation
-------------------------------------
Install using [NPM](https://docs.npmjs.com/about-npm/) or [Yarn](https://yarnpkg.com):

```bash
npm install @jsdevtools/static-mock-data
```


Usage
-------------------------------------
The mock data can be used as plain JSON or as JavaScript objects.

### Raw JSON
```javascript
const employees = require("@jsdevtools/static-mock-data/employees.json");

for (let employee of employees) {
  console.log(employee.dob);        // date string
  console.log(employee.portrait);   // relative file path
}
```

### JavaScript Objects
```javascript
const mockData = require("@jsdevtools/static-mock-data");

for (let employee of mockData.employees) {
  console.log(employee.dob);        // Date object
  console.log(employee.portrait);   // absolute file path
}
```



Browser support
--------------------------
Static Mock Data supports recent versions of every major web browser.  Older browsers may require [Babel](https://babeljs.io/) and/or [polyfills](https://babeljs.io/docs/en/next/babel-polyfill).

To use Static Mock Data in a browser, you'll need to use a bundling tool such as [Webpack](https://webpack.js.org/), [Rollup](https://rollupjs.org/), [Parcel](https://parceljs.org/), or [Browserify](http://browserify.org/). Some bundlers may require a bit of configuration, such as setting `browser: true` in [rollup-plugin-resolve](https://github.com/rollup/rollup-plugin-node-resolve).




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
Contributions, enhancements, and bug-fixes are welcome!  [Open an issue](https://github.com/JS-DevTools/static-mock-data/issues) on GitHub and [submit a pull request](https://github.com/JS-DevTools/static-mock-data/pulls).

#### Building
To build the project locally on your computer:

1. __Clone this repo__<br>
`git clone https://github.com/JS-DevTools/static-mock-data.git`

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



Big Thanks To
--------------------------
Thanks to these awesome companies for their support of Open Source developers ❤

[![Travis CI](https://jstools.dev/img/badges/travis-ci.svg)](https://travis-ci.com)
[![SauceLabs](https://jstools.dev/img/badges/sauce-labs.svg)](https://saucelabs.com)
[![Coveralls](https://jstools.dev/img/badges/coveralls.svg)](https://coveralls.io)
