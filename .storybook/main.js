// eslint-disable-next-line @typescript-eslint/no-var-requires
const EslintWebpackPlugin = require('eslint-webpack-plugin');

module.exports = {
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    '@storybook/preset-create-react-app',
  ],
  framework: '@storybook/react',
  core: {
    builder: 'webpack5',
  },
  webpackFinal: (config) => {
    return {
      ...config,
      plugins: config.plugins.filter((plugin) => {
        // Remove the eslint-webpack-plugin: We already check our code, storybook doesn't need to bother
        // doing it again with potentially different options.
        if (plugin instanceof EslintWebpackPlugin) {
          return false;
        }
        return true;
      }),
    };
  },
};
