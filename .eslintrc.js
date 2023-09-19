module.exports = {
  extends: ['plugin:@typescript-eslint/recommended', "next", "prettier"],
  rules: {
    // "no-param-reassign": 0,
    // "no-console": 1,
    // "no-const-assign": 2,
    // "no-this-before-super": 2,
    // "no-undef": 1,
    // "no-unreachable": 2,
    "@next/next/no-html-link-for-pages": "off"
  },
  plugins: ['@typescript-eslint'],
  parserOptions: {
    "babelOptions": {
      "presets": [require.resolve("next/babel")],
    },
  },
}

