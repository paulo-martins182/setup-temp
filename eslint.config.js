import js from '@eslint/js'
import globals from 'globals'
import ts from '@typescript-eslint/eslint-plugin'
import tsParser from '@typescript-eslint/parser'
import react from 'eslint-plugin-react'
import reactHooks from 'eslint-plugin-react-hooks'
import prettier from 'eslint-plugin-prettier'
import prettierConf from 'eslint-config-prettier'

export default [
  {
    files: ['**/*.{ts,tsx,js,jsx}'],
    languageOptions: {
      ecmaVersion: 2020,
      sourceType: 'module',
      globals: globals.browser,
      parser: tsParser,
      parserOptions: {
        ecmaFeatures: {
          jsx: true
        }
      }
    },
    plugins: {
      '@typescript-eslint': ts,
      react,
      'react-hooks': reactHooks,
      prettier
    },
    rules: {
      'react/jsx-filename-extension': [
        'error',
        { extensions: ['.tsx', '.jsx'] }
      ],
      '@typescript-eslint/no-unused-vars': [
        'warn',
        { argsIgnorePattern: '^_' }
      ],
      'react/jsx-boolean-value': ['error', 'always'],
      'prettier/prettier': [
        'error',
        {
          endOfLine: 'auto'
        }
      ]
    },
    settings: {
      react: {
        version: 'detect'
      }
    }
  },
  {
    ignores: ['node_modules', 'dist', 'public', 'coverage']
  },
  prettierConf
]
