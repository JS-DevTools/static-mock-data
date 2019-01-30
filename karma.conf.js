// Karma config
// https://karma-runner.github.io/0.12/config/configuration-file.html

"use strict";

module.exports = karmaConfig({
  typescript: true,
});

function karmaConfig (options) {
  options = normalizeOptions(options);

  let config = mergeConfig(options.config, {
    frameworks: ["mocha", "chai", "host-environment"],
    reporters: ["verbose"],
    files: options.testFiles.concat(options.serveFiles.map(serveFile)),
  });

  configureWebpack(config, options);
  configureBrowsers(config, options);

  options.typescript && configureTypescript(config, options);
  options.coverage && configureCoverage(config, options);

  console.log("Karma Config:\n", JSON.stringify(config, null, 2));
  return (karma) => karma.set(config);
}

function normalizeOptions (options) {
  let typescript = options.typescript === undefined ? true : Boolean(options.typescript);
  let sourceDir = options.sourceDir === undefined ? typescript ? "src" : "lib" : String(options.sourceDir);
  let testDir = options.testDir === undefined ? "test" : String(options.testDir);

  return {
    sourceDir,
    testDir,
    typescript,
    coverage: options.coverage === undefined ? process.argv.includes("--coverage") : Boolean(options.coverage),
    testFiles: arrayify(options.testFiles) || [`${testDir}/**/*.+(spec|test).+(js|jsx)`],
    serveFiles: arrayify(options.serveFiles) || ["**/*"],
  };
}

function configureWebpack (config, options) {
  config.preprocessors = mergeConfig(config.preprocessors, {
    [`${options.testDir}/**/*.+(spec|test).+(js|jsx)`]: ["webpack"],
  });

  config.webpack = mergeConfig(config.webpack, {
    mode: "development",
    devtool: "inline-source-map",
  });

  config.webpack.module = mergeConfig(config.webpack.module, {
    rules: [],
  });
}

function configureTypescript (config) {
  const tsExtensions = ["ts", "tsx"];

  config.mime = mergeConfig(config.mime, {
    "text/x-typescript": tsExtensions,
  });

  config.webpack.resolve = mergeConfig(config.webpack.resolve, {
    extensions: [".js", ".jsx", ".mjs", ".json"],
  });

  for (let ext of tsExtensions) {
    if (!config.webpack.resolve.extensions.includes("." + ext)) {
      config.webpack.resolve.extensions.push("." + ext);
    }
  }

  if (!hasWebpackLoader(config.webpack.module.rules, "ts-loader")) {
    // Insert the ts-loader at the beginning of the rules list
    config.webpack.module.rules.unshift({ test: /\.tsx?$/, use: "ts-loader" });
  }
}

function configureCoverage (config, options) {
  if (!config.reporters.includes("coverage-istanbul")) {
    config.reporters.push("coverage-istanbul");
  }

  config.coverageIstanbulReporter = mergeConfig(config.coverageIstanbulReporter, {
    dir: "coverage/%browser%",
    reports: ["text-summary", "lcov"],
  });

  if (!hasWebpackLoader(config.webpack.module.rules, "istanbul-instrumenter-loader")) {
    config.webpack.module.rules.push({
      test: options.typescript ? /\.tsx?$/ : /\.jsx?$/,
      include: new RegExp(options.sourceDir.replace(/\//g, "\/")),
      exclude: /node_modules|\.spec\.|\.test\./,
      enforce: "post",
      use: {
        loader: "istanbul-instrumenter-loader",
        options: {
          esModules: true,
        },
      }
    });
  }
}

function mergeConfig (config, defaults) {
  config = config || {};

  for (let key of Object.keys(defaults)) {
    let defaultValue = defaults[key];

    if (config[key] === undefined) {
      config[key] = defaultValue;
    }
  }

  return config;
}

function arrayify (value) {
  if (Array.isArray(value)) {
    return value;
  }
  else if (value) {
    return [value];
  }
}

function serveFile (file) {
  if (typeof file === "string") {
    return { pattern: file, included: false, served: true };
  }
  else {
    file.served = true;
    return file;
  }
}

function hasWebpackLoader (rules, name) {
  for (let rule of rules) {
    if (rule && rule.use) {
      if (rule.use === name || rule.use.loader === name) {
        return true;
      }

      if (Array.isArray(rule.use)) {
        let found = hasWebpackLoader(rule.use, name);
        if (found) {
          return true;
        }
      }
    }
  }
}

/**
 * Configures the browsers for the current platform
 */
function configureBrowsers (config) {
  let isWindows = /^win/.test(process.platform) || process.env.WINDOWS === "true";
  let isMac = /^darwin/.test(process.platform);
  let isLinux = !isMac && !isWindows;
  let isCI = process.env.CI === "true";

  if (isCI) {
    if (isWindows) {
      // IE and Edge aren't available in CI, so use SauceLabs
      configureSauceLabs(config);
    }
    else if (isMac) {
      config.browsers = ["FirefoxHeadless", "ChromeHeadless", "Safari"];
    }
    else if (isLinux) {
      config.browsers = ["FirefoxHeadless", "ChromeHeadless"];
    }
  }
  else if (isMac) {
    config.browsers = ["Firefox", "Chrome", "Safari"];
  }
  else if (isLinux) {
    config.browsers = ["Firefox", "Chrome"];
  }
  else if (isWindows) {
    config.browsers = ["Firefox", "Chrome", "Edge"];
  }
}

/**
 * Configures Sauce Labs to test on IE and Edge.
 * https://github.com/karma-runner/karma-sauce-launcher
 */
function configureSauceLabs (config) {
  let username = process.env.SAUCE_USERNAME;
  let accessKey = process.env.SAUCE_ACCESS_KEY;

  if (!username || !accessKey) {
    throw new Error("SAUCE_USERNAME and/or SAUCE_ACCESS_KEY is not set");
  }

  let project = require("./package.json");

  config.sauceLabs = {
    build: `${project.name} v${project.version} Build #${process.env.TRAVIS_JOB_NUMBER}`,
    testName: `${project.name} v${project.version}`,
    tags: [project.name],
  };

  config.customLaunchers = {
    // IE_11: {
    //   base: "SauceLabs",
    //   platform: "Windows 7",
    //   browserName: "internet explorer"
    // },
    Edge: {
      base: "SauceLabs",
      platform: "Windows 10",
      browserName: "microsoftedge"
    },
  };

  config.reporters.push("saucelabs");
  config.browsers = Object.keys(config.customLaunchers);
  // config.concurrency = 1;
  config.captureTimeout = 60000;
  config.browserDisconnectTolerance = 5;
  config.browserDisconnectTimeout = 60000;
  config.browserNoActivityTimeout = 60000;
  config.logLevel = "debug";
}
