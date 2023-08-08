module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  extends: [
    '@react-native',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
    'plugin:react-hooks/recommended',
    'plugin:react/recommended',
    'plugin:prettier/recommended',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    project: './tsconfig.json',
    ecmaVersion: 'latest',
  },
  plugins: ['@typescript-eslint', 'react', 'prettier'],
  settings: {
    react: {
      version: '18',
    },
  },
  rules: {
    'prettier/prettier': 'error',
    '@typescript-eslint/no-non-null-assertion': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    'react/display-name': 'off',
    '@typescript-eslint/ban-types': [
      'error',
      {
        types: {
          // un-ban a type that's banned by default
          '{}': false,
        },
        extendDefaults: true,
      },
    ],
    '@typescript-eslint/no-floating-promises': 'off',
    '@typescript-eslint/no-unsafe-assignment': 'off',
    '@typescript-eslint/no-unsafe-member-access': 'off',
  },
}
