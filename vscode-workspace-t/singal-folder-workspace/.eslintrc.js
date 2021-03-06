module.exports = {
  root: true,
  parser: "@typescript-eslint/parser",
  env: {
    commonjs: true,
  },
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: "module",
    ecmaFeatures: {
      jsx: true,
    },
  },
  settings: {
    react: {
      version: "detect",
    },
  },
  extends: [
    "plugin:react/recommended",
    "plugin:@typescript-eslint/recommended",
    "prettier/@typescript-eslint",
    "plugin:prettier/recommended",
  ],
  rules: {
    // "@typescript-eslint/explicit-module-boundary-types": 0,
    // "react/display-name": 0,
  },
};
