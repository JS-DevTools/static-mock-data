describe("projects", () => {
  "use strict";

  it("should be two separate data sources", () => {
    expect(mock.data.projects).not.to.equal(projectJSON);
  });

  [projectJSON, mock.data.projects].forEach((projects) => {
    let isJSON = projects === projectJSON;

    describe(isJSON ? "JSON" : "JavaScript", () => {
      it("should have 100 projects", () => {
        expect(projects).to.have.lengthOf(100);
      });

      it("all project IDs should be unique", () => {
        let ids = [];
        projects.forEach((project) => {
          expect(ids).not.to.contain(project.id);
          ids.push(project.id);
        });
      });

      it("all project names should be unique", () => {
        let names = [];
        projects.forEach((project) => {
          expect(names).not.to.contain(project.name);
          names.push(project.name);
        });
      });

      it("should have valid data types for all fields", () => {
        projects.forEach((project) => {
          expect(project.id).to.be.a("number").above(1000);
          expect(project.name).to.be.a("string").and.have.length.above(20).and.below(56);
          expect(project.description).to.be.a("string").and.have.length.above(200).and.below(2000);
          expect(project.department).to.be.a("string").and.match(/^Accounting|Sales|Human Resources|Marketing$/);
          expect(project.assigned).to.be.an("array").and.have.length.above(0);

          if (isJSON) {
            expect(project.startedOn).to.be.a("string").and.not.empty;
            if (project.endedOn !== null) {
              expect(project.endedOn).to.be.a("string").and.not.empty;
            }
          }
          else {
            expect(project.startedOn).to.be.a("date").and.not.satisfy(isNaN);
            if (project.endedOn !== null) {
              expect(project.endedOn).to.be.a("date").and.not.satisfy(isNaN);
            }
          }

          project.assigned.forEach((username) => {
            expect(username).to.be.a("string").and.not.empty;
          });
        });
      });

      it("should only have employees from the same department", () => {
        projects.forEach((project) => {
          project.assigned.forEach((username) => {
            let employee = mock.data.employees.find((emp) => emp.username === username);

            expect(employee.department).to.equal(project.department);
          });
        });
      });

      it("should only have employees that were employed during the project timeframe", () => {
        projects.forEach((project) => {
          project.assigned.forEach((username) => {
            let employee = mock.data.employees.find((emp) => emp.username === username);

            if (project.endedOn !== null) {
              let hired = new Date(employee.hiredOn).getTime();
              let ended = new Date(project.endedOn).getTime();
              expect(hired).to.be.below(ended);
            }

            if (employee.terminatedOn !== null) {
              let terminated = new Date(employee.terminatedOn).getTime();
              let started = new Date(project.startedOn).getTime();
              expect(terminated).to.be.above(started);
            }
          });
        });
      });
    });
  });
});
