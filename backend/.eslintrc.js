module.exports = {
  env: {
    es6: true,
    node: true,
  },
  extends: ['airbnb-base', 'prettier'],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 11,
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint', 'prettier'],
  rules: {
    'prettier/prettier': 'error',
    'class-methods-use-this': 0,
    'import/extensions': 0,
    'import/no-unresolved': 0,
    'camelcase': 'off',
  },
};
