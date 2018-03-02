const babel = require("rollup-plugin-babel");
const uglify = require("rollup-plugin-uglify-es");
const minify = require("uglify-es").minify;

import resolve from "rollup-plugin-node-resolve";

export default {
  input: "src/lib/index.js",
  external: [
    "react",
    "reactDOM",
    "prop-types",
    "create-react-context",
  ],
  output: {
    file: "build/index.js",
    name: "react-form-things",
    format: "umd",
    sourcemap: false,
    exports: "named",
    globals: {
      "react": "react",
      "reactDOM": "reactDOM",
      "prop-types": "PropTypes",
      "create-react-context": "createReactContext",
    },
  },
  plugins: [
    resolve(),
    babel({
      babelrc: false,
      presets: ["react-app"],
      plugins: ["transform-object-rest-spread", "external-helpers"],
      exclude: "node_modules/**",
    }),
    uglify({}, minify),
  ],
};
