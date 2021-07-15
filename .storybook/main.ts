import custom from '../webpack.config';
import { Configuration } from 'webpack';

const config = {
  core: {
    builder: 'webpack5',
  },
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: ['@storybook/addon-links', '@storybook/addon-essentials'],
  webpackFinal: (config: Configuration): Configuration => ({
    ...config,
    module: { ...config.module, rules: custom.module?.rules ?? [] },
    plugins: (config.plugins ?? []).concat(custom.plugins ?? []),
  }),
};
export default config;
