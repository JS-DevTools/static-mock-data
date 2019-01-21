import json from "rollup-plugin-json";
import { terser } from "rollup-plugin-terser";
import resolve from "rollup-plugin-node-resolve";
import commonjs from "rollup-plugin-commonjs";


export default {
  input: "cjs/src/browser.js",

  output: {
    file: "out/static-mock-data.min.js",
    format: "umd",
    name: "mock.data",
    sourcemap: false
  },

  plugins: [
    resolve(),
    commonjs(),
    json(),
    terser({
      ecma: 8,
      output: {
        comments: /^!/,
      },
    })
  ]
};
