'use strict';

// Karma config
// https://karma-runner.github.io/0.12/config/configuration-file.html
module.exports = function(config) {
  var isMac      = /^darwin/.test(process.platform),
      isWindows  = /^win/.test(process.platform),
      isLinux    = !(isMac || isWindows),
      isTravisCI = process.env.TRAVIS === 'true';

  config.set({
    frameworks: ['mocha', 'chai', 'sinon'],
    reporters: ['mocha'],

    files: [
      // JS libs
      'node_modules/jquery/dist/jquery.js',
      'node_modules/lodash/index.js',

      // <%= project.name %>
      'dist/mock-data.min.js',
      {pattern: '*.json', included: false, served: true},

      // Unit tests
      'tests/helper.js',
      'tests/**/*.spec.js'
    ],

    browsers: (function() {
      // Test on all browsers that are available for the environment
      if (isMac) {
        return ['PhantomJS', 'Firefox', 'Chrome', 'Safari'];
      }
      else if (isWindows) {
        return ['PhantomJS', 'Firefox', 'Chrome', 'Safari', 'IE'];
      }
      else if (isTravisCI) {
        return ['PhantomJS', 'Firefox'];
      }
      else if (isLinux) {
        return ['PhantomJS', 'Firefox', 'Chrome'];
      }
    })()
  });
};
