module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true,
  },
  parser: '@typescript-eslint/parser',
  ignorePatterns: ['dist', 'node_modules', 'build'],
  extends: [
    'airbnb-typescript', 'prettier',
  ],
  overrides: [
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json'],
  },
  plugins: [
    'react',
    'simple-import-sort',
    'import',
  ],
  rules: {
    quotes: [2, 'single'],
    indent: [2, 2],
    semi: 0,
    '@typescript-eslint/semi': 2,
    'comma-dangle': 0,
    '@typescript-eslint/comma-dangle': [2, {
      arrays: 'always-multiline',
      objects: 'always-multiline',
      imports: 'always-multiline',
      exports: 'always-multiline',
      functions: 'never',
    }],
    'no-unused-vars': 0,
    '@typescript-eslint/no-unused-vars': 1,
    'object-curly-spacing': [2, 'always'],
    'no-multi-spaces': 2,
    'react/react-in-jsx-scope': 0,
    'semi-spacing': [2, { before: false, after: true }],
    'no-else-return': 2,
    '@typescript-eslint/consistent-type-definitions': [2, 'type'],
    'simple-import-sort/imports': 2,
    '@typescript-eslint/strict-boolean-expressions': 0,
    'import/no-extraneous-dependencies': [2, {'devDependencies': true}],
  },
};
