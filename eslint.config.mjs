import js from '@eslint/js';
import tsParser from '@typescript-eslint/parser';
import tsPlugin from '@typescript-eslint/eslint-plugin';
import prettierConfig from 'eslint-config-prettier';
import prettierPlugin from 'eslint-plugin-prettier';

export default [
  js.configs.recommended,
  {
    files: ['**/*.ts', '**/*.tsx'],
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        project: './tsconfig.json',
        tsconfigRootDir: process.cwd(),
        sourceType: 'module',
        ecmaVersion: 'latest',
      },
      globals: {
        process: 'readonly',
        console: 'readonly',
        Buffer: 'readonly',
        __dirname: 'readonly',
        __filename: 'readonly',
        global: 'readonly',
        module: 'readonly',
        require: 'readonly',
        exports: 'readonly',
      },
    },
    plugins: {
      '@typescript-eslint': tsPlugin,
      prettier: prettierPlugin,
    },
    rules: {
      ...tsPlugin.configs.recommended.rules,
      ...tsPlugin.configs['recommended-type-checked'].rules,

      'prettier/prettier': 'error',
      '@typescript-eslint/interface-name-prefix': 'off',
      '@typescript-eslint/explicit-function-return-type': 'off',
      '@typescript-eslint/explicit-module-boundary-types': 'off',
      '@typescript-eslint/require-await': 'off',
      '@typescript-eslint/no-explicit-any': 'off',
      '@typescript-eslint/no-unused-vars': ['error',  {
        "caughtErrorsIgnorePattern": "^_",
        "argsIgnorePattern": "^_",
        "varsIgnorePattern": "^_",
      }],
      "@typescript-eslint/type-annotation-spacing": "error",
      "@typescript-eslint/semi": ["error"],

      '@typescript-eslint/no-floating-promises': 'error',
      '@typescript-eslint/await-thenable': 'error',
      '@typescript-eslint/prefer-nullish-coalescing': 'error',
      '@typescript-eslint/prefer-optional-chain': 'error',

      'no-duplicate-imports': 'error',
      'no-debugger': 'error',
      'no-undef': 'off',
      "no-trailing-spaces": "error",
      "no-whitespace-before-property": "error",
      "no-mixed-spaces-and-tabs": ["error", "smart-tabs"],
      "no-multiple-empty-lines": ["error", { "max": 1, "maxEOF": 0 }],
      "no-multi-spaces": "error",
      "no-console": ["error", { "allow": ["info", "error"] }],
      "no-var": [ "error" ],
      "prefer-const": "error",

      "newline-per-chained-call": ["error", { "ignoreChainWithDepth": 1 }],

      "object-curly-newline": ["error", {
        "ObjectExpression": "always",
        "ObjectPattern": { "multiline": true, "minProperties": 2 }
      }],
      "object-curly-spacing": ["error", "always"],
      "object-property-newline": "error",
      "object-shorthand": "error",

      "quotes": ["error", "single", { "avoidEscape": true }],
      "semi": ["error", "always"],
      "indent": ["error", "tab"],
      "max-len": ["error", { "code": 150 }],
      "comma-spacing": ["error", { "before": false, "after": true }],
      "space-before-blocks": "error",
      "space-before-function-paren": ["error", {
        "anonymous": "always",
        "named": "always",
        "asyncArrow": "always"
      }],
      "space-in-parens": [
        "error",
        "never"
      ],
      "space-infix-ops": "error",
      "space-unary-ops": "error",
      "spaced-comment": [
        "error",
        "always"
      ],
      "eol-last": ["error", "always"],
      "keyword-spacing": ["error", { "before": true, "after": true }],
      "arrow-spacing": ["error", { "before": true, "after": true }],
      "eqeqeq": "error",
      "curly": "error",
    },
  },
  {
    files: ['src/main.ts'],
    rules: {
      '@typescript-eslint/no-floating-promises': 'off',
    },
  },
  {
    files: ['**/*.spec.ts', '**/*.test.ts', '**/test/**/*.ts'],
    rules: {
      '@typescript-eslint/no-explicit-any': 'off',
    },
  },
  prettierConfig,   // Prettier configuration (must be last)
  {  // Global ignores
    ignores: [
      'dist/',
      'node_modules/',
      'coverage/',
      '*.js',
      '*.d.ts',
      '*.spec.ts',
    ],
  },
];