// module.exports = {
//   presets: ['module:@react-native/babel-preset'],
// };
const presets = ['module:metro-react-native-babel-preset'];
const plugins = [];

plugins.push(
  [
    'module-resolver',
    {
      root: ['./src'],
      extensions: ['.js', '.json'],
      alias: {
        '@': './src',
      },
    },
  ],
  ['@babel/plugin-proposal-private-methods', { loose: true }],
  ['react-native-reanimated/plugin'],
  ["nativewind/babel"]
);

module.exports = {
  presets,
  plugins,
};
