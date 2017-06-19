module.exports = {
  "parser": "babel-eslint",

  "extends": ["eslint:recommended", "plugin:react/recommended"],

  "parserOptions": {
    "ecmaVersion": 6,
    "sourceType": "module",
    "ecmaFeatures": {
      "impliedStrict": true,
      "jsx": true,
      "experimentalObjectRestSpread": true
    }
  },

  "env": {
    "browser": true,
    "node": true,
    "es6": true,
    "mocha": true
  },

  "plugins": [
    "react"
  ],

  "globals": {
    "define": true,
    "__DEV__": true
  },

  "rules": {
    "arrow-body-style": "off",
    "arrow-parens": ["warn", "as-needed", { "requireForBlockBody": true }],
    "arrow-spacing": "warn",
    "camelcase": ["warn", { "properties": "always" }],
    "consistent-return": "off",
    "func-style": "off",
    "jsx-quotes": ["warn", "prefer-double"],
    "no-confusing-arrow": "off",
    "no-console": ["warn", { allow: ["warn", "error"] }],
    "no-constant-condition": "warn",
    "no-debugger": "warn",
    "no-labels": "warn",
    "no-multiple-empty-lines": ["warn", { max: 1, maxEOF: 1 }],
    "no-unused-vars": ["warn", { "vars": "all", "args": "after-used", "caughtErrors": "none" }],
    "quotes": ["warn", "single", "avoid-escape"],
    "semi": ["warn", "always"],
    "strict": ["error", "global"],

    // ESLint-plugin-React
    // https://github.com/yannickcr/eslint-plugin-react

    "react/forbid-prop-types": ["warn", { "forbid": ["any"] }],
    "react/jsx-boolean-value": "warn",
    "react/jsx-closing-bracket-location": "off",
    "react/jsx-curly-spacing": ["warn", "always"],
    "react/jsx-first-prop-new-line": ["warn", "multiline"],
    "react/jsx-indent-props": "off",
    "react/jsx-key": "warn",
    "react/jsx-max-props-per-line": "off",
    "react/jsx-no-bind": "off",
    "react/jsx-no-literals": "off",
    "react/jsx-pascal-case": "warn",
    "react/jsx-sort-prop-types": "off",
    "react/jsx-sort-props": "off",
    "react/jsx-tag-spacing": ["warn", { "beforeSelfClosing": "always" }],
    "react/jsx-wrap-multilines": "warn",
    "react/no-multi-comp": "off",
    "react/no-set-state": "off",
    "react/no-unescaped-entities": "off",
    "react/prefer-es6-class": "warn",
    "react/prop-types": "warn",
    "react/self-closing-comp": "warn",
    "react/sort-comp": "warn",
    "react/sort-prop-types": "off"
  }
};
