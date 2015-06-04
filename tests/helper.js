'use strict';

if (typeof(window) === 'object') {
  // We're running in a web browser
  window.isBrowser = true;
  window.isNode = false;

  // Mimic Node globals
  window.require = _.noop;
  window.__filename = $('script[src*="helper.js"]')[0].src;
  window.__dirname = __filename.substr(0, __filename.lastIndexOf('/'));

  window.json = {
    data: {
      employees: requireJSON('../employees.json'),
      projects: requireJSON('../projects.json')
    }
  };
}
else {
  // We're running in Node
  global.isBrowser = false;
  global.isNode = true;

  // Export Node modules as globals
  global.expect = require('chai').expect;
  global.sinon = require('sinon');
  global._ = require('lodash');

  global.mock = {
    data: require('../')
  };

  global.json = {
    data: {
      employees: require('../employees.json'),
      projects: require('../projects.json')
    }
  };
}

/**
 * Synchronously loads a JSON file in a web browser, via JQuery
 *
 * @param {string} filename
 * @returns {object[]}
 */
function requireJSON(filename) {
  var json;

  $.ajax({
    url: __dirname + '/' + filename,
    async: false,
    dataType: 'json',
    success: function(response) {
      json = response;
    }
  });

  return json;
}
