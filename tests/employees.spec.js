'use strict';

var json   = require('../employees.json'),
    data   = require('../'),
    _      = require('lodash'),
    fs     = require('fs'),
    path   = require('path'),
    expect = require('chai').expect;

describe('employees', function() {
  it('should be two separate data sources', function() {
    expect(data.employees).not.to.equal(json);
  });

  [json, data.employees].forEach(function(employees) {
    describe(employees === json ? 'JSON' : 'JavaScript', function() {
      it('should have 102 employees', function() {
        expect(employees).to.have.lengthOf(102);
      });

      it('should have an admin employee', function() {
        var admin = _.where(employees, {username: 'admin', password: 'admin'});
        expect(admin).to.have.lengthOf(1);
      });

      it('should have a jdoe employee', function() {
        var jdoe = _.where(employees, {username: 'jdoe', password: 'jdoe'});
        expect(jdoe).to.have.lengthOf(1);
      });

      it('all usernames should be unique', function() {
        var usernames = [];
        employees.forEach(function(employee) {
          expect(usernames).not.to.contain(employee.username);
          usernames.push(employee.username);
        });
      });

      it('all SSNs should be unique', function() {
        var ssns = [];
        employees.forEach(function(employee) {
          expect(ssns).not.to.contain(employee.ssn);
          ssns.push(employee.ssn);
        });
      });

      it('should have valid data types for all fields', function() {
        employees.forEach(function(employee) {
          expect(employee.username).to.be.a('string').and.not.empty;
          expect(employee.password).to.be.a('string').and.not.empty;
          expect(employee.name.first).to.be.a('string').and.not.empty;
          expect(employee.name.last).to.be.a('string').and.not.empty;
          expect(employee.gender).to.be.a('string').and.match(/^male|female$/);
          expect(employee.portrait).to.be.a('string').and.match(new RegExp('portraits\/' + employee.username + '\.jpg$'));
          expect(employee.thumbnail).to.be.a('string').and.match(new RegExp('portraits\/' + employee.username + '-thumb\.jpg$'));
          expect(employee.email).to.be.a('string').and.not.empty;
          expect(employee.address.street).to.be.a('string').and.not.empty;
          expect(employee.address.city).to.be.a('string').and.not.empty;
          expect(employee.address.state).to.be.a('string').and.not.empty;
          expect(employee.address.zip).to.be.a('string').and.match(/^\d{5}$/);
          expect(employee.phones).to.be.an('array').and.have.length.above(0);
          expect(employee.ssn).to.be.a('string').and.match(/^\d{3}-\d{2}-\d{4}$/);
          expect(employee.department).to.be.a('string').and.match(/^Accounting|Sales|Human Resources|Marketing$/);
          expect(employee.roles).to.be.an('array').and.have.length.above(0);

          if (employees === json) {
            expect(employee.dob).to.be.a('string').and.not.empty;
            expect(employee.hiredOn).to.be.a('string').and.not.empty;
            if (employee.terminatedOn !== null) {
              expect(employee.terminatedOn).to.be.a('string').and.not.empty;
            }
          }
          else {
            expect(employee.dob).to.be.a('date').and.not.satisfy(isNaN);
            expect(employee.hiredOn).to.be.a('date').and.not.satisfy(isNaN);
            if (employee.terminatedOn !== null) {
              expect(employee.terminatedOn).to.be.a('date').and.not.satisfy(isNaN);
            }
          }

          employee.phones.forEach(function(phone) {
            expect(phone.type).to.be.a('string').and.match(/^home|office|cell$/);
            expect(phone.number).to.be.a('string').and.match(/^\d{3}-\d{3}-\d{4}$/);
          });

          employee.roles.forEach(function(role) {
            expect(role).to.be.a('string').and.match(/^admin|employee|contractor|consultant|part time|full time|salaried|hourly$/);
          });
        });
      });

      it('should have the correct paths to portrait images', function() {
        employees.forEach(function(employee) {
          if (employees === json) {
            expect(path.isAbsolute(employee.portrait)).to.be.false;
            expect(path.isAbsolute(employee.thumbnail)).to.be.false;
          }
          else {
            expect(path.isAbsolute(employee.portrait)).to.be.true;
            expect(path.isAbsolute(employee.thumbnail)).to.be.true;
          }

          expect(fs.existsSync(employee.portrait)).to.be.true;
          expect(fs.existsSync(employee.thumbnail)).to.be.true;
        });
      });

      it('should not be terminated before being hired', function() {
        employees.forEach(function(employee) {
          if (employee.terminatedOn !== null) {
            var hired = new Date(employee.hiredOn);
            var terminated = new Date(employee.terminatedOn);
            expect(terminated).to.be.above(hired);
          }
        });
      });

      it('should have roles that do not conflict with each other', function() {
        employees.forEach(function(employee) {
          employee.roles.forEach(function(role) {
            // Only the admin user has the "admin" role
            if (role === 'admin') {
              expect(employee.username).to.equal('admin');
            }

            // "employee", "contractor", and "consultant" are mutually exclusive
            if (role === 'employee') {
              expect(employee.roles).not.to.contain('contractor');
              expect(employee.roles).not.to.contain('consultant');
            }
            if (role === 'contractor') {
              expect(employee.roles).not.to.contain('employee');
              expect(employee.roles).not.to.contain('consultant');
            }
            if (role === 'consultant') {
              expect(employee.roles).not.to.contain('employee');
              expect(employee.roles).not.to.contain('contractor');
            }

            // "part time" and "full time" are mutually exclusive
            if (role === 'part time') {
              expect(employee.roles).not.to.contain('full time');
            }
            if (role === 'full time') {
              expect(employee.roles).not.to.contain('part time');
            }

            // "salaried" and "hourly" are mutually exclusive
            if (role === 'salaried') {
              expect(employee.roles).not.to.contain('hourly');
            }
            if (role === 'hourly') {
              expect(employee.roles).not.to.contain('salaried');
            }
          });
        });
      })
    });
  });
});
