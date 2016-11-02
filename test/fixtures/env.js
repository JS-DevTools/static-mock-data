(function () {
  'use strict';

  if (typeof window === 'object') {
    window.env = {
      NODE: '',
      BROWSER: 'true',
      KARMA: 'true',
    };
  }
  else {
    global.env = process.env;
    global.env.NODE = 'true';
    global.env.BROWSER = '';
    global.env.KARMA = '';
  }

}());
