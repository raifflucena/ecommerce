module.exports = {
  root: true,
  extends: ['plugin:@next/next/recommended', '@payloadcms'],
  ignorePatterns: ['**/payload-types.ts', '**/build/**', '**/dist/**'],
  plugins: ['prettier', 'simple-import-sort'],
  rules: {
    'prettier/prettier': ['error', { endOfLine: 'auto' }],
    'no-console': 'off',
    'simple-import-sort/imports': 'error',
    'simple-import-sort/exports': 'error',
    'function-paren-newline': ['error', 'consistent'],
  },
}
