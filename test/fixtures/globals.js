/**
 * This script exposes test dependencies as globals. This saves us from having to `require()`
 * them in every spec file, and also allows the same spec files to work in Node.js and web browsers.
 */
(() => {
  "use strict";

  if (host.browser) {
    // Define globals for web browsers
    host.global.expect = chai.expect;
    host.global.employeeJSON = requireJSON("../employees.json");
    host.global.projectJSON = requireJSON("../projects.json");
  }
  else {
    // Define globals for Node.js
    host.global.employeeJSON = require("../../employees.json");
    host.global.projectJSON = require("../../projects.json");
    host.global.mock = { data: require("../../") };
    host.global.expect = require("chai").expect;
    require("chai").should();
  }

  /**
   * Synchronously loads a JSON file in a web browser, via JQuery
   *
   * @param {string} filename
   * @returns {object[]}
   */
  function requireJSON (filename) {
    let json;

    if (host.karma) {
      filename = "/base/tests/" + filename;
    }

    $.ajax({
      url: filename,
      async: false,
      dataType: "json",
      success (response) {
        json = response;
      }
    });

    return json;
  }

})();
