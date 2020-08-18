module.exports = {
  'env': {
    'browser': true,
    'commonjs': true,
    'es6': true,
    'node': true,
    'mocha': true,
  },
  'extends': [
    'eslint:recommended',
    'google',
  ],
  'globals': {
    'Atomics': 'readonly',
    'SharedArrayBuffer': 'readonly',
  },
  'parserOptions': {
    'ecmaVersion': 2018,
  },
  'rules': {
    // Possible "error"s (overrides from recommended set)
    'no-extra-parens': 'error',
    // We require all vars to be initialized (see init-declarations)
    // If we NEED a var to be initialized to undefined, it needs to be explicit
    "no-undef-init": "off",
    "no-undef": "error",
    "no-undefined": "off",
    "no-unused-vars": "error",
     // Disallow hoisting - let & const don't allow hoisting anyhow
     "no-use-before-define": "error",
     // Stylistic - everything here is a "warn"ing because of style.
    "array-bracket-spacing": ["warn", "always"],
    "block-spacing": ["warn", "always"],
    "brace-style": ["warn", "1tbs", { "allowSingleLine": false }],
    "camelcase": "warn",
    "comma-spacing": ["warn", { "before": false, "after": true }],
    "indent": ["warn", 4],
    "max-depth": ["warn", 8],
    "max-len": ["warn", 132],
    "quotes": ["warn", "single"],
    "keyword-spacing": ["warn", { "before": true, "after": true }],
    "space-before-blocks": ["warn", "always"],
    "space-before-function-paren": ["warn", "never"],
    "space-in-parens": ["warn", "never"],
    "space-infix-ops": ["warn", { "int32Hint": true }],
    "space-unary-ops": "error",
    "spaced-comment": ["warn", "always"],
    "wrap-regex": "warn",
    "linebreak-style": ["off"]
  },
};