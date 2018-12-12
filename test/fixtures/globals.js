/**
 * This script exposes test dependencies as globals. This saves us from having to `require()`
 * them in every spec file, and also allows the same spec files to work in Node.js and web browsers.
 */
(function () {
  "use strict";

  if (host.browser) {
    // Define globals for web browsers
    window.expect = chai.expect;
    window.employeeJSON = requireJSON("../employees.json");
    window.projectJSON = requireJSON("../projects.json");
  }
  else {
    // Define globals for Node.js
    global.employeeJSON = require("../../employees.json");
    global.projectJSON = require("../../projects.json");
    global.mock = { data: require("../../") };
    global.expect = require("chai").expect;
    require("chai").should();
  }

  /**
   * Synchronously loads a JSON file in a web browser, via JQuery
   *
   * @param {string} filename
   * @returns {object[]}
   */
  function requireJSON (filename) {
    var json;

    if (window.__karma__) {
      filename = "/base/tests/" + filename;
    }

    $.ajax({
      url: filename,
      async: false,
      dataType: "json",
      success: function (response) {
        json = response;
      }
    });

    return json;
  }

}());
