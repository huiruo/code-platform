module.exports = {
  root: true,
  extends: ['custom'],
  parser: '@typescript-eslint/parser',
  extends: [
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
  ],
  plugins: ['@typescript-eslint', 'react'],
  /**
   * https://eslint.org/docs/latest/rules
   */
  rules: {
    'no-unused-vars': [
      'error',
      { vars: 'all', args: 'after-used', ignoreRestSiblings: false },
    ],
    quotes: ['error', 'single'],
    semi: ['error', 'never'],
  },
}
