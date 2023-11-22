/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution')

module.exports = {
  root: true,
  'extends': [
    'plugin:vue/vue3-recommended',
    '@vue/eslint-config-typescript/recommended',
    '@vue/standard',
    'plugin:storybook/recommended',

  ],
  rules: {
    'comma-dangle': [2, 'always-multiline'],
    'no-irregular-whitespace': 1,
    '@typescript-eslint/ban-ts-comment': [
      'error',
      { 'ts-ignore': 'allow-with-description' },
    ],
  },
  overrides: [
    {
      files: [
        'cypress/e2e/**/*.{cy,spec}.{js,ts,jsx,tsx}'
        'src/**/*.ct.{js,ts,jsx,tsx}',
        '**/src/**/*.e2e.{j,t}s?(x)',
      ],
      env: {
        'cypress/globals': true,
      },
      extends: ['plugin:cypress/recommended'],
    }
  ],
  parserOptions: {
    ecmaVersion: 'latest'
  }
}
