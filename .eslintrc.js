module.exports = {
  root: true,
  env: {
    node: true,
    jest: true
  },
  extends: [
    'plugin:vue/recommended',
    'plugin:promise/recommended',
    'eslint:recommended',
    '@vue/prettier'
  ],
  parserOptions: {
    parser: 'babel-eslint'
  },
  rules: {
    // 'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-console': 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'require-await': 'error'
  },
  overrides: [
    {
      files: ['src/i18n/locales/*.js'],
      rules: {
        'sort-keys': ['warn', 'asc', { caseSensitive: false }]
      }
    }
  ]
}
