module.exports = {
  root: true,
  extends: '@react-native-community',

  overrides: [
    {
      files: ['*.ts', '*.tsx', '*.js', '*.jsx'],
      rules: {
        'react-native/no-inline-styles': 'off',
      },
    },
  ],
};
