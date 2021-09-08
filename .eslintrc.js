module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: [
    'airbnb-base',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: [
    '@typescript-eslint',
  ],
  settings: {
    'import/resolver': {
      node: {
        extensions: [
          '.js',
          '.json',
          '.ts',
          'fs',
          'vs',
        ],
      },
    },
  },
  rules: {
    'import/prefer-default-export': 'off',
    'import/extensions': [
      'error', 'always',
      {
        js: 'never',
        ts: 'never',
      },
    ],
  },
};
