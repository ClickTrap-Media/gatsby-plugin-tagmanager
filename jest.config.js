
const { defaults } = require("jest-config");

module.exports = {
  verbose: true,
  testMatch: [
      "<rootDir>/**/*.spec.js",
      "<rootDir>/**/*.spec.jsx"
    ],
  testPathIgnorePatterns: [
    "<rootdir>/node_modules/",
  ],
  automock: true
};
