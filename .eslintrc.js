// module.exports = {
//     env: {
//         // allow NodeJs global variables and NodeJS scoping
//         node: true,
//         browser: true,
//         // allow use of ES6 globals such as Set
//         es6: true,
//     },
//     parser: 'babel-eslint',
//     extends: ['airbnb', 'plugin:prettier/recommended'],
//     parserOptions: {
//         // allow use of object rest/spread properties as well as other ES8 features
//         ecmaVersion: 2018,
//         // allow use of Ecmascript modules
//         sourceType: 'module',
//     },
// }

module.exports = {
  extends: ['airbnb', 'prettier'],
  env: {
    browser: true,
    node: true,
    jest: true,
  },
  rules: {
    'react/jsx-filename-extension': [
      1,
      {
        extensions: ['.js', '.jsx'],
      },
    ],
  },
  overrides: [
    {
      files: ['**/*.spec.js', '**/*.spec.jsx'],
      env: {
        jest: true,
      },
    },
  ],
};
