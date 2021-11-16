module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true
  },
  extends: ['plugin:react/recommended'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 12,
    sourceType: 'module'
  },
  plugins: ['react'],
  rules: {
    // quotes: [2, 'single'],
    // // we want to force semicolons
    semi: [1, 'never'],
    // // we use 2 spaces to indent our code
    // indent: [1, 2],
    // // we want to avoid extraneous spaces
    'no-multi-spaces': ['warn'],
    'react/prop-types': 0
  }
}

// quotes: [2, "single"],
// "react/prop-types": 0,
