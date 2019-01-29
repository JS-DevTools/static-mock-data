(() => {
  "use strict";

  /**
   * Expose test dependencies as globals. This saves us from having to `require()`
   * them in every spec file, and also allows the same spec files to work in Node.js and web browsers.
   */
  before("Set globals", async () => {
    if (host.browser) {
      // Define globals for web browsers
      host.global.expect = chai.expect;
      host.global.employeeJSON = await fetchJSON("/base/employees.json");
      host.global.projectJSON = await fetchJSON("/base/projects.json");
    }
    else {
      // Define globals for Node.js
      host.global.employeeJSON = require("../../employees.json");
      host.global.projectJSON = require("../../projects.json");
      host.global.staticMockData = require("../../");
      host.global.expect = require("chai").expect;
    }
  });

  /**
   * Fetches a JSON file in a web browser
   *
   * @param {string} url
   * @returns {Promise<object[]>}
   */
  async function fetchJSON (url) {
    let response = await fetch(url);
    if (!response.ok) {
      throw new Error(`HTTP ${response.status} Error while downloading ${url}`);
    }

    let json = await response.json();
    return json;
  }

})();
