import json from "rollup-plugin-json";
import { terser } from "rollup-plugin-terser";
import resolve from "rollup-plugin-node-resolve";
import commonjs from "rollup-plugin-commonjs";

export default {

  input: "cjs/src/browser.js",

  output: {
    file: "out/static-mock-data.js",
    format: "umd",
    name: "mock.data",
    sourcemap: true

  },

  plugins: [
    resolve(),
    commonjs(),
    json()
  ]
}
