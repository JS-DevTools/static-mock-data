/**
 * This script configures Mocha, Chai, Sinon, etc.
 * It also exposes everything as globals, to allow tests to run in Node and in browsers.
 *
 * Why not use Browserify instead of globals?
 *  - To make sure Mock Data works properly when Node and CommonJS are not available
 *  - Some of our devDependencies have separate packages packages for Node vs. Browser (e.g. Mocha, Sinon)
 *  - This reduces redundant boilerplate code in the .spec files
 */
(function() {
  'use strict';

  if (typeof(window) === 'object') {
    // Configure Mocha
    mocha.setup('bdd');
    mocha.fullTrace();
    mocha.checkLeaks();
    mocha.globals([]);

    // Expose Browser globals
    window.global = window;
    window.expect = chai.expect;
    window.userAgent = {
      isNode: false,
      isBrowser: true
    };

    window.employeeJSON = requireJSON('../employees.json');
    window.projectJSON = requireJSON('../projects.json');
  }
  else {
    // Expose Node globals
    global.mock = {data: require('../')};
    global.expect = require('chai').expect;
    global.sinon = require('sinon');
    global._ = require('lodash');

    global.userAgent = {
      isNode: true,
      isBrowser: false
    };

    global.employeeJSON = require('../employees.json');
    global.projectJSON = require('../projects.json');
  }

  // Set global settings for all tests
  beforeEach(function() {
    this.currentTest.timeout(2000);
    this.currentTest.slow(100);
  });

  /**
   * Synchronously loads a JSON file in a web browser, via JQuery
   *
   * @param {string} filename
   * @returns {object[]}
   */
  function requireJSON(filename) {
    var json;

    if (window.__karma__) {
      filename = '/base/tests/' + filename;
    }

    $.ajax({
      url: filename,
      async: false,
      dataType: 'json',
      success: function(response) {
        json = response;
      }
    });

    return json;
  }

})();
