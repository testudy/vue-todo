module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: [
    'plugin:vue/essential',
    '@vue/airbnb'
  ],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    indent: ['error', 4],
    'max-len': ['error', { code: 120 }],
    'no-param-reassign': ['error', { props: false }],
    'vue/attribute-hyphenation': [
      'error',
      'always'
    ],
    'vue/html-end-tags': 'error',
    'vue/no-parsing-error': [
      2,
      { 'x-invalid-end-tag': false }
    ],
    'vue/html-indent': [
      'error',
      4
    ],
    'vue/html-self-closing': ['error', {
        html: {
            void: 'always',
            normal: 'always',
            component: 'always'
        },
        svg: 'always',
        math: 'always'
    }],
    'vue/require-default-prop': 'error',
    'vue/require-prop-types': 'error',
    'vue/attributes-order': 'error',
    'vue/html-quotes': [
      'error',
      'double'
    ],
    'vue/order-in-components': 'error'
  },
  parserOptions: {
    parser: 'babel-eslint'
  }
}
