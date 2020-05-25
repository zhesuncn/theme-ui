module.exports =  {
  stories: ['../test/**.stories.[tj]s'],
  // webpackFinal: (config) => console.dir(config, { depth: null }) || config
  webpackFinal: async (config, { configType }) => {
    // `configType` has a value of 'DEVELOPMENT' or 'PRODUCTION'
    // You can change the configuration based on that.
    // 'PRODUCTION' is used when building the static version of storybook.

    // Make whatever fine-grained changes you need
    config.module.rules.splice(0,0,{
      test: /\.svg$/,
      use: ['@svgr/webpack'],
      // include: path.resolve(__dirname, '../'),
    });

    // Return the altered config
    return config;
  },

};
