module.exports = {
    extends: 'next/core-web-vitals',
    rules: {
      '@typescript-eslint/no-explicit-any': 'off', // Disable explicit `any` errors
      '@typescript-eslint/no-unused-vars': [
      'warn',
      { argsIgnorePattern: '^_', varsIgnorePattern: '^_' },
    ], // Warn for unused variables
    },
  };
  