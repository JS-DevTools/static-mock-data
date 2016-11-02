(function () {
  'use strict';

  if (env.BROWSER) {
    // Configure Mocha for web browsers
    mocha.setup('bdd');
    mocha.fullTrace();
    mocha.checkLeaks();
    mocha.globals([]);
  }

}());
