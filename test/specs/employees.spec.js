describe("employees", () => {
  "use strict";

  let path, fs;
  if (host.node) {
    path = require("path");
    fs = require("fs");
  }

  it("should be two separate data sources", () => {
    expect(mock.data.employees).not.to.equal(employeeJSON);

    for (let i = 0; i < mock.data.employees.length; i++) {
      let employee = mock.data.employees[i];
      let jsonEmployee = employeeJSON[i];

      // Nested objects/arrays should contain the same data
      expect(employee.name).not.to.equal(jsonEmployee.name);
      expect(employee.phones).not.to.equal(jsonEmployee.phones);
      expect(employee.address).not.to.equal(jsonEmployee.address);
      expect(employee.roles).not.to.equal(jsonEmployee.roles);

      // ... but should NOT be the same instances
      expect(employee.name).to.deep.equal(jsonEmployee.name);
      expect(employee.phones).to.deep.equal(jsonEmployee.phones);
      expect(employee.address).to.deep.equal(jsonEmployee.address);
      expect(employee.roles).to.deep.equal(jsonEmployee.roles);
    }
  });

  [employeeJSON, mock.data.employees].forEach((employees) => {
    let isJSON = employees === employeeJSON;

    describe(isJSON ? "JSON" : "JavaScript", () => {
      it("should have 102 employees", () => {
        expect(employees).to.have.lengthOf(102);
      });

      it("should have an admin employee", () => {
        let admin = employees.filter((employee) => (
          employee.username === "admin" && employee.password === "admin"
        ));
        expect(admin).to.have.lengthOf(1);
      });

      it("should have a jdoe employee", () => {
        let jdoe = employees.filter((employee) => (
          employee.username === "jdoe" && employee.password === "jdoe"
        ));
        expect(jdoe).to.have.lengthOf(1);
      });

      it("all usernames should be unique", () => {
        let usernames = [];
        employees.forEach((employee) => {
          expect(usernames).not.to.contain(employee.username);
          usernames.push(employee.username);
        });
      });

      it("all SSNs should be unique", () => {
        let ssns = [];
        employees.forEach((employee) => {
          expect(ssns).not.to.contain(employee.ssn);
          ssns.push(employee.ssn);
        });
      });

      it("should have valid data types for all fields", () => {
        employees.forEach((employee) => {
          expect(employee.username).to.be.a("string").and.not.empty;
          expect(employee.password).to.be.a("string").and.not.empty;
          expect(employee.name.first).to.be.a("string").and.not.empty;
          expect(employee.name.last).to.be.a("string").and.not.empty;
          expect(employee.gender).to.be.a("string").and.match(/^male|female$/);
          expect(employee.portrait).to.be.a("string").and.not.empty;
          expect(employee.thumbnail).to.be.a("string").and.not.empty;
          expect(employee.email).to.be.a("string").and.not.empty;
          expect(employee.address.street).to.be.a("string").and.not.empty;
          expect(employee.address.city).to.be.a("string").and.not.empty;
          expect(employee.address.state).to.be.a("string").and.not.empty;
          expect(employee.address.zip).to.be.a("string").and.match(/^\d{5}$/);
          expect(employee.phones).to.be.an("array").and.have.length.above(0);
          expect(employee.ssn).to.be.a("string").and.match(/^\d{3}-\d{2}-\d{4}$/);
          expect(employee.department).to.be.a("string").and.match(/^Accounting|Sales|Human Resources|Marketing$/);
          expect(employee.roles).to.be.an("array").and.have.length.above(0);

          if (isJSON) {
            expect(employee.dob).to.be.a("string").and.not.empty;
            expect(employee.hiredOn).to.be.a("string").and.not.empty;
            if (employee.terminatedOn) {
              expect(employee.terminatedOn).to.be.a("string").and.not.empty;
            }
          }
          else {
            expect(employee.dob).to.be.a("date").and.not.satisfy(isNaN);
            expect(employee.hiredOn).to.be.a("date").and.not.satisfy(isNaN);
            if (employee.terminatedOn) {
              expect(employee.terminatedOn).to.be.a("date").and.not.satisfy(isNaN);
            }
          }

          employee.phones.forEach((phone) => {
            expect(phone.type).to.be.a("string").and.match(/^home|office|cell$/);
            expect(phone.number).to.be.a("string").and.match(/^\d{3}-\d{3}-\d{4}$/);
          });

          employee.roles.forEach((role) => {
            expect(role).to.be.a("string").and.match(/^admin|employee|contractor|consultant|part time|full time|salaried|hourly$/);
          });
        });
      });

      it("should have the correct paths to portrait images", () => {
        employees.forEach((employee) => {
          if (host.node) {
            if (isJSON) {
              expect(employee.portrait).not.to.satisfy(path.isAbsolute);
              expect(employee.thumbnail).not.to.satisfy(path.isAbsolute);
            }
            else {
              expect(employee.portrait).to.satisfy(path.isAbsolute);
              expect(employee.thumbnail).to.satisfy(path.isAbsolute);
            }

            expect(fs.existsSync(employee.portrait)).to.be.true;
            expect(fs.existsSync(employee.thumbnail)).to.be.true;
          }
          else {
            expect(employee.portrait).to.equal("portraits/" + employee.username + ".jpg");
            expect(employee.thumbnail).to.equal("portraits/" + employee.username + "-thumb.jpg");
          }
        });
      });

      it("should not be terminated before being hired", () => {
        employees.forEach((employee) => {
          if (employee.terminatedOn) {
            let hired = new Date(employee.hiredOn).getTime();
            let terminated = new Date(employee.terminatedOn).getTime();
            expect(terminated).to.be.above(hired);
          }
        });
      });

      it("should have roles that do not conflict with each other", () => {
        employees.forEach((employee) => {
          employee.roles.forEach((role) => {
            // Only the admin user has the "admin" role
            if (role === "admin") {
              expect(employee.username).to.equal("admin");
            }

            // "employee", "contractor", and "consultant" are mutually exclusive
            if (role === "employee") {
              expect(employee.roles).not.to.contain("contractor");
              expect(employee.roles).not.to.contain("consultant");
            }
            if (role === "contractor") {
              expect(employee.roles).not.to.contain("employee");
              expect(employee.roles).not.to.contain("consultant");
            }
            if (role === "consultant") {
              expect(employee.roles).not.to.contain("employee");
              expect(employee.roles).not.to.contain("contractor");
            }

            // "part time" and "full time" are mutually exclusive
            if (role === "part time") {
              expect(employee.roles).not.to.contain("full time");
            }
            if (role === "full time") {
              expect(employee.roles).not.to.contain("part time");
            }

            // "salaried" and "hourly" are mutually exclusive
            if (role === "salaried") {
              expect(employee.roles).not.to.contain("hourly");
            }
            if (role === "hourly") {
              expect(employee.roles).not.to.contain("salaried");
            }
          });
        });
      });
    });
  });
});
