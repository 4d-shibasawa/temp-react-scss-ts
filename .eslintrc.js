const path = require('path');

module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:import/recommended',
    'prettier',
  ],
  settings: {
    react: {
      sourceType: 'module',
      version: 'detect',
    },
  },
  plugins: ['import', 'react-hooks'],

  rules: {
    // JS rules
    eqeqeq: ['error', 'always'],
    'react/jsx-uses-react': 'off',
    'react/react-in-jsx-scope': 'off',
  },

  overrides: [
    {
      files: ['**/*.ts', '**/*.tsx'],
      extends: ['plugin:@typescript-eslint/recommended', 'plugin:import/typescript', 'prettier'],
      parser: '@typescript-eslint/parser',
      parserOptions: {
        project: path.resolve(__dirname, './tsconfig.json'), // set this if type-check rules necessary
        sourceType: 'module',
      },
      settings: {
        'import/resolver': {
          node: {
            paths: ['src'],
            extensions: ['.ts', '.tsx'],
          },
        },
      },
      rules: {
        // TS and React-TS rules
        'react/prop-types': 0,
      },
    },
  ],
};
