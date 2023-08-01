module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended', 'plugin:react-hooks/recommended'],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parser: '@typescript-eslint/parser',
  plugins: ['react-refresh', 'tss-unused-classes'],
  rules: {
    'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
    'react-hooks/exhaustive-deps': 'off',
    'no-restricted-imports': [
      'error',
      {
        patterns: ['@mui/*/*/*'],
      },
    ],
    'tss-unused-classes/unused-classes': 'warn',
    '@typescript-eslint/no-explicit-any': 'off',
    'no-prototype-builtins': 'off',
    '@typescript-eslint/ban-types': 'off',
    '@typescript-eslint/no-unused-vars': 'warn',
  },
};

