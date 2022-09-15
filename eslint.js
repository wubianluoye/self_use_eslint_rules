module.exports = {
  root: true,
  env: {
    browser: true,
    commonjs: true,
    es6: true,
    node: true
  },
  globals: {
    defineEmits: true,
    document: true,
    localStorage: true,
    GLOBAL_VAR: true,
    window: true,
    defineProps: true,
    defineExpose: true,
    defineOptions: true,
    $ref: true
  },
  plugins: ['@typescript-eslint', 'prettier', 'import'],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:vue/vue3-recommended',
    'prettier'
  ],
  parserOptions: {
    parser: '@typescript-eslint/parser',
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
      tsx: true
    }
  },
  rules: {
    // close lf error
    'import/no-unresolved': [0],
    'vue/multi-word-component-names': 'off',
    'vue/no-deprecated-router-link-tag-prop': 'off',
    'import/extensions': 'off',
    'import/no-absolute-path': 'off',
    'no-async-promise-executor': 'off',
    'import/no-extraneous-dependencies': 'off',
    'vue/no-multiple-template-root': 'off',
    'no-console': 'off',
    'no-plusplus': 'off',
    'no-useless-escape': 'off',
    'no-bitwise': 'off',
    '@typescript-eslint/no-explicit-any': ['off'],
    '@typescript-eslint/explicit-module-boundary-types': ['off'],
    '@typescript-eslint/ban-ts-comment': ['off'],
    'vue/no-setup-props-destructure': ['off'],
    '@typescript-eslint/no-empty-function': ['off'],
    'vue/script-setup-uses-vars': ['off'],
    // can config  to 2 if need more then required
    '@typescript-eslint/no-unused-vars': [0],
    'no-param-reassign': ['off'],
    "vue/max-attributes-per-line": [2, {
      "singleline": 10,
      "multiline": 1
    }],
    "vue/singleline-html-element-content-newline": "off",
    "vue/multiline-html-element-content-newline": "off",
    "vue/name-property-casing": ["error", "PascalCase"],
    "vue/no-v-html": "off",
    'accessor-pairs': 2,
    'arrow-spacing': [2, {
      'before': true,
      'after': true
    }],
    'vue/html-closing-bracket-newline': [
      'error',
      {
        singleline: 'never',
        multiline: 'always'
      }
    ],
    'vue/html-self-closing': [
      'error',
      {
        html: {
          'void': 'always',
          normal: 'always',
          component: 'always'
        },
        svg: 'always',
        math: 'always'
      }
    ],
    "vue/html-indent": ["error", 2, {
      "attribute": 1,
      "baseIndent": 1,
      "closeBracket": 0,
      "alignAttributesVertically": false,
      "ignores": []
    }],
    "object-curly-spacing": ["error", "always"],
    "comma-spacing": ["error", { "before": false, "after": true }],
    "block-spacing": "error",
    "key-spacing": ["error", { "beforeColon": false }],
    'space-infix-ops': 2,
    'space-unary-ops': [2, {
      'words': true,
      'nonwords': false
    }],
  }
}
