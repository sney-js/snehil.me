module.exports = {
  stories: process.env.NODE_ENV === 'prod'
    ? ['../src/**/!(development)/*.stories.(tsx|jsx|mdx)']
    : ['../src/**/*.stories.(tsx|jsx|mdx)'],
  addons: [
    '@storybook/preset-scss',
    '@storybook/addon-viewport/register',
    'storybook-addon-themes',
    {
      name: '@storybook/addon-docs',
      options: {
        configureJSX: true
      }
    },
    '@storybook/addon-controls',
    '@storybook/addon-jest',
    '@storybook/addon-a11y'
  ],
  webpackFinal: (config) => {
    config.resolve.modules.push(process.cwd() + '/node_modules');
    config.resolve.modules.push(process.cwd() + '/src');

    // this is needed for working w/ linked folders
    config.resolve.symlinks = false;
    return config;
  }
};
