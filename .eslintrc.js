module.exports = {
  parser: "@typescript-eslint/parser",

  extends: [
    "plugin:react/recommended",
    "plugin:@typescript-eslint/recommended",
    "prettier/@typescript-eslint",
    "plugin:prettier/recommended",
  ],

  parserOptions: {
    ecmaVersion: 2019,
    sourceType: "module",
    project: "./tsconfig.json",
    tsconfigRootDir: "./",
    ecmaFeatures: {
      jsx: true,
    },
  },

  rules: {
    "react/display-name": "off",
    "react/prop-types": "off",

    "@typescript-eslint/no-explicit-any": "off",
    "@typescript-eslint/explicit-function-return-type": "off",
    "@typescript-eslint/no-non-null-assertion": "off",
    "@typescript-eslint/no-use-before-define": "off",
  },

  settings: {
    react: {
      version: "detect",
    },
    "import/resolver": {
      node: {
        extensions: [
          ".js",
          ".jsx",
          ".ts",
          ".tsx",
        ],
      },
    },
  },
};
