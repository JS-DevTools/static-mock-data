import typescript from "rollup-plugin-typescript2";
import json from "rollup-plugin-json";
import { terser } from "rollup-plugin-terser";
import nodeResolve from "rollup-plugin-node-resolve";
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
    commonjs(),
    // nodeResolve(),
    json(),
    // typescript(),
    terser({
      ecma: 8,
      output: {
        comments: /^!/,
      },
    })
  ]
};
