module.exports = {
  env: {
    browser: true,
    es6: true
  },
  extends: [
    'standard',
    'standard-react'
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly'
  },
  parser: 'babel-eslint',
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 2018,
    sourceType: 'module',
    allowImportExportEverywhere: true
  },
  plugins: [
    'react'
  ],
  rules: {
    'comma-dangle': 'off',
    'generator-star-spacing': 'off',
    'no-underscore-dangle': 'off',
    'array-callback-return': 'off',
    'space-before-function-paren': 'off',
    'camelcase': 'off',
    'padded-blocks': 'off',
    'no-console': 'off',
    'object-property-newline': 'off',
    'max-len': [ 'error', { code: 130, tabWidth: 2 }],
    'react/prop-types': 0
  }
}
