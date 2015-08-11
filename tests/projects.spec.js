'use strict';

describe('projects', function() {
  it('should be two separate data sources', function() {
    expect(mock.data.projects).not.to.equal(projectJSON);
  });

  [projectJSON, mock.data.projects].forEach(function(projects) {
    var isJSON = projects === projectJSON;

    describe(isJSON ? 'JSON' : 'JavaScript', function() {
      it('should have 100 projects', function() {
        expect(projects).to.have.lengthOf(100);
      });

      it('all project IDs should be unique', function() {
        var ids = [];
        projects.forEach(function(project) {
          expect(ids).not.to.contain(project.id);
          ids.push(project.id);
        });
      });

      it('all project names should be unique', function() {
        var names = [];
        projects.forEach(function(project) {
          expect(names).not.to.contain(project.name);
          names.push(project.name);
        });
      });

      it('should have valid data types for all fields', function() {
        projects.forEach(function(project) {
          expect(project.id).to.be.a('number').above(1000);
          expect(project.name).to.be.a('string').and.have.length.above(20).and.below(56);
          expect(project.description).to.be.a('string').and.have.length.above(200).and.below(2000);
          expect(project.department).to.be.a('string').and.match(/^Accounting|Sales|Human Resources|Marketing$/);
          expect(project.assigned).to.be.an('array').and.have.length.above(0);

          if (isJSON) {
            expect(project.startedOn).to.be.a('string').and.not.empty;
            if (project.endedOn !== null) {
              expect(project.endedOn).to.be.a('string').and.not.empty;
            }
          }
          else {
            expect(project.startedOn).to.be.a('date').and.not.satisfy(isNaN);
            if (project.endedOn !== null) {
              expect(project.endedOn).to.be.a('date').and.not.satisfy(isNaN);
            }
          }

          project.assigned.forEach(function(username) {
            expect(username).to.be.a('string').and.not.empty;
          });
        });
      });

      it('should only have employees from the same department', function() {
        projects.forEach(function(project) {
          project.assigned.forEach(function(username) {
            var employee = _.find(mock.data.employees, {username: username});
            expect(employee.department).to.equal(project.department);
          });
        });
      });

      it('should only have employees that were employed during the project timeframe', function() {
        projects.forEach(function(project) {
          project.assigned.forEach(function(username) {
            var employee = _.find(mock.data.employees, {username: username});

            if (project.endedOn !== null) {
              var hired = new Date(employee.hiredOn);
              var ended = new Date(project.endedOn);
              expect(hired).to.be.below(ended);
            }

            if (employee.terminatedOn !== null) {
              var terminated = new Date(employee.terminatedOn);
              var started = new Date(project.startedOn);
              expect(terminated).to.be.above(started);
            }
          });
        });
      })
    });
  });
});
