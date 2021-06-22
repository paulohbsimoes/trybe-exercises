/**
 * @type {import('@stryker-mutator/api/core').StrykerOptions}
 */
module.exports = {
  _comment:
    "This config was generated using a preset. Please see the handbook for more information: https://github.com/stryker-mutator/stryker-handbook/blob/master/stryker/guides/react.md#react",
  testRunner: "jest",
  mutate: [
    "src/App.js"
  ],
  mutator: { excludedMutations: ["ObjectLiteral"] },
  commandRunner: {
    "command": "CI=true npm test"
  },
  reporters: ["progress", "clear-text", "html"],
  coverageAnalysis: "off",
  jest: {
    projectType: "create-react-app",
  },
};
