## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in story book. You can see a list of components exemple.

## Get start

Use ui component in your react application

### webpack.config to load theme-ui with babel-loader

You need to define the babel-loader for theme-ui. and the @svgr/webpack loader to the svg in theme-ui

You can add the configuration like this: 
            {
              test: /\.(js|mjs|jsx|ts|tsx)$/,
              loader: require.resolve('babel-loader'),
              options: {
                presets: ["@babel/preset-env", "@babel/preset-react"],
                plugins: [
                  [
                    require.resolve('babel-plugin-named-asset-import'),
                    {
                      loaderMap: {
                        svg: {
                          ReactComponent:
                            '@svgr/webpack?-svgo,+titleProp,+ref![path]',
                        },
                      },
                    },
                  ],
                ]
              },
              include: path.resolve(paths.appNodeModules, 'theme-ui')
            }

### Use component

Add <ThemeContextProvider/> to the root where your ui component is used.

<ThemeContextProvider>
    ...
    <Button/>
    ...
</ThemeContextProvider>
