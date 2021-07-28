const JsConfigPathsMapper = require("jsconfig-paths-jest-mapper");

module.exports = {
  verbose: true,
  moduleNameMapper: new JsConfigPathsMapper({
    configFileName: "./jsconfig.json",
  }),
  transform: {
    "^.+\\.(js|jsx)$": "babel-jest",
    "^.+\\.svg$": "<rootDir>/tests/svg.js"
  }
};
