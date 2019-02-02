// Karma config
// https://karma-runner.github.io/0.12/config/configuration-file.html

// @ts-check
"use strict";

// const karmaConfig = require("karma-config").default;
//
// module.exports = karmaConfig({
//   sourceDir: "esm",
// });

module.exports = (karma) => karma.set({
  frameworks: ["mocha", "chai", "host-environment"],
  reporters: ["verbose", "coverage-istanbul"],
  files: [
    "test/**/*.+(spec|test).+(js|jsx)",
    { pattern: "test/**/*", included: false, served: true }
  ],
  preprocessors: {
    "test/**/*.+(spec|test).+(js|jsx)": ["webpack"],
  },
  webpack: {
    mode: "development",
    devtool: "inline-source-map",
    module: {
      rules: [
        {
          test: /\.jsx?$/,
          include: /esm/,
          exclude: /node_modules|\.spec\.|\.test\./,
          enforce: "post",
          use: {
            loader: "istanbul-instrumenter-loader",
            options: {
              esModules: true,
              produceSourceMap: true,
            }
          }
        }
      ]
    },
  },
  browsers: [
    "FirefoxHeadless",
    "ChromeHeadless",
    // "Edge"
  ],

  coverageIstanbulReporter: {
    dir: "coverage/%browser%",
    reports: [
      "text-summary",
      "lcov"
    ]
  },
});
