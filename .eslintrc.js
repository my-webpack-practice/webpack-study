module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es6: true
  },
  extends: 'plugin:prettier/recommended',
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module'
  },
  rules: {
    'prettier/prettier': [
      'error',
      {
        singleQuote: true
      }
    ]
  }
};
