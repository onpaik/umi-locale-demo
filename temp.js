{
  mode: 'development',
  devtool: 'cheap-module-source-map',
  node: {
    setImmediate: false,
    process: 'mock',
    dgram: 'empty',
    fs: 'empty',
    net: 'empty',
    tls: 'empty',
    child_process: 'empty'
  },
  output: {
    path: '/Users/jedi/workshop/an-github/umi-locale-demo/dist',
    filename: '[name].js',
    chunkFilename: '[name].async.js',
    publicPath: '/',
    devtoolModuleFilenameTemplate: function () { /* omitted long function */ },
    pathinfo: true
  },
  resolve: {
    symlinks: true,
    alias: {
      'umi/locale': '/Users/jedi/workshop/an-github/umi-locale-demo/node_modules/umi-plugin-locale-paik/lib/locale.js',
      'react-intl': '/Users/jedi/workshop/an-github/umi-locale-demo/node_modules/react-intl',
      'umi/withIntl': '/Users/jedi/workshop/an-github/umi-locale-demo/node_modules/umi-plugin-locale-paik/lib/withIntl/index.js',
      dva: '/Users/jedi/workshop/an-github/umi-locale-demo/node_modules/dva',
      'dva-loading': '/Users/jedi/workshop/an-github/umi-locale-demo/node_modules/dva-loading/lib/index.js',
      'path-to-regexp': '/Users/jedi/workshop/an-github/umi-locale-demo/node_modules/path-to-regexp/index.js',
      'object-assign': '/Users/jedi/workshop/an-github/umi-locale-demo/node_modules/object-assign/index.js',
      react: '/Users/jedi/workshop/an-github/umi-locale-demo/node_modules/react',
      'react-dom': '/Users/jedi/workshop/an-github/umi-locale-demo/node_modules/react-dom',
      'react-router': '/Users/jedi/workshop/an-github/umi-locale-demo/node_modules/react-router',
      'react-router-dom': '/Users/jedi/workshop/an-github/umi-locale-demo/node_modules/react-router-dom',
      history: '/Users/jedi/workshop/an-github/umi-locale-demo/node_modules/umi-history',
      '@': '/Users/jedi/workshop/an-github/umi-locale-demo/src/',
      '@tmp': '/Users/jedi/workshop/an-github/umi-locale-demo/src/pages/.umi',
      'umi/link': '/Users/jedi/workshop/an-github/umi-locale-demo/node_modules/umi/lib/link.js',
      'umi/dynamic': '/Users/jedi/workshop/an-github/umi-locale-demo/node_modules/umi/lib/dynamic.js',
      'umi/navlink': '/Users/jedi/workshop/an-github/umi-locale-demo/node_modules/umi/lib/navlink.js',
      'umi/redirect': '/Users/jedi/workshop/an-github/umi-locale-demo/node_modules/umi/lib/redirect.js',
      'umi/prompt': '/Users/jedi/workshop/an-github/umi-locale-demo/node_modules/umi/lib/prompt.js',
      'umi/router': '/Users/jedi/workshop/an-github/umi-locale-demo/node_modules/umi/lib/router.js',
      'umi/withRouter': '/Users/jedi/workshop/an-github/umi-locale-demo/node_modules/umi/lib/withRouter.js',
      'umi/_renderRoutes': '/Users/jedi/workshop/an-github/umi-locale-demo/node_modules/umi/lib/renderRoutes.js',
      'umi/_createHistory': '/Users/jedi/workshop/an-github/umi-locale-demo/node_modules/umi/lib/createHistory.js',
      'umi/_runtimePlugin': '/Users/jedi/workshop/an-github/umi-locale-demo/node_modules/umi/lib/runtimePlugin.js',
      '@babel/polyfill': '/Users/jedi/workshop/an-github/umi-locale-demo/node_modules/@babel/polyfill/lib/index.js',
      antd: '/Users/jedi/workshop/an-github/umi-locale-demo/node_modules/antd',
      'antd-mobile': '/Users/jedi/workshop/an-github/umi-locale-demo/node_modules/antd-mobile',
      '@compose': 'shared/utils/compose',
      '@utils': 'shared/utils',
      '@components': 'shared/components'
    },
    extensions: [
      '.web.js',
      '.wasm',
      '.mjs',
      '.js',
      '.web.jsx',
      '.jsx',
      '.web.ts',
      '.ts',
      '.web.tsx',
      '.tsx',
      '.json'
    ],
    modules: [
      'node_modules',
      '/Users/jedi/workshop/an-github/umi-locale-demo/node_modules/af-webpack/node_modules',
      '/Users/jedi/workshop/an-github/umi-locale-demo/node_modules/',
      'src',
      'public'
    ]
  },
  resolveLoader: {
    modules: [
      'node_modules',
      '/Users/jedi/workshop/an-github/umi-locale-demo/node_modules/af-webpack/node_modules'
    ]
  },
  module: {
    rules: [
      /* config.module.rule('exclude') */
      {
        exclude: [
          /\.json$/,
          /\.(js|jsx|ts|tsx|mjs|wasm)$/,
          /\.(css|less|scss|sass)$/,
          /.svg$/,
          /.ejs$/,
          /\.ejs$/,
          /.svg$/
        ],
        use: [
          /* config.module.rule('exclude').use('url-loader') */
          {
            loader: '/Users/jedi/workshop/an-github/umi-locale-demo/node_modules/umi-url-pnp-loader/dist/cjs.js',
            options: {
              limit: 10000,
              name: 'static/[name].[hash:8].[ext]'
            }
          }
        ]
      },
      /* config.module.rule('mjs-require') */
      {
        test: /\.mjs$/,
        type: 'javascript/auto',
        include: [
          '/Users/jedi/workshop/an-github/umi-locale-demo'
        ]
      },
      /* config.module.rule('mjs') */
      {
        test: /\.mjs$/,
        include: [
          '/Users/jedi/workshop/an-github/umi-locale-demo'
        ],
        use: [
          /* config.module.rule('mjs').use('babel-loader') */
          {
            loader: '/Users/jedi/workshop/an-github/umi-locale-demo/node_modules/babel-loader/lib/index.js',
            options: {
              presets: [
                [
                  '/Users/jedi/workshop/an-github/umi-locale-demo/node_modules/babel-preset-umi/lib/index.js',
                  {
                    targets: {
                      chrome: 49,
                      firefox: 64,
                      safari: 10,
                      edge: 13,
                      ios: 10
                    },
                    env: {
                      useBuiltIns: 'entry'
                    }
                  }
                ]
              ],
              plugins: [
                [
                  '/Users/jedi/workshop/an-github/umi-locale-demo/node_modules/babel-plugin-import/lib/index.js',
                  {
                    libraryName: 'antd',
                    libraryDirectory: 'es',
                    style: true
                  },
                  'antd'
                ],
                [
                  '/Users/jedi/workshop/an-github/umi-locale-demo/node_modules/babel-plugin-import/lib/index.js',
                  {
                    libraryName: 'antd-mobile',
                    libraryDirectory: 'es',
                    style: true
                  },
                  'antd-mobile'
                ],
                [
                  '/Users/jedi/workshop/an-github/umi-locale-demo/node_modules/babel-plugin-import/lib/index.js',
                  {
                    libraryName: 'ant-design-pro',
                    libraryDirectory: 'lib',
                    style: true,
                    camel2DashComponentName: false
                  },
                  'ant-design-pro'
                ],
                '/Users/jedi/workshop/an-github/umi-locale-demo/node_modules/babel-plugin-dva-hmr/lib/index.js',
                [
                  '/Users/jedi/workshop/an-github/umi-locale-demo/node_modules/babel-plugin-named-asset-import/index.js',
                  {
                    loaderMap: {
                      svg: {
                        ReactComponent: '/Users/jedi/workshop/an-github/umi-locale-demo/node_modules/af-webpack/lib/svgr.js?-prettier,-svgo![path]'
                      }
                    }
                  }
                ]
              ],
              cacheDirectory: true,
              babelrc: false,
              customize: '/Users/jedi/workshop/an-github/umi-locale-demo/node_modules/babel-preset-umi/lib/webpack-overrides.js'
            }
          }
        ]
      },
      /* config.module.rule('js') */
      {
        test: /\.js$/,
        include: [
          '/Users/jedi/workshop/an-github/umi-locale-demo'
        ],
        exclude: [
          /node_modules/
        ],
        use: [
          /* config.module.rule('js').use('babel-loader') */
          {
            loader: '/Users/jedi/workshop/an-github/umi-locale-demo/node_modules/babel-loader/lib/index.js',
            options: {
              presets: [
                [
                  '/Users/jedi/workshop/an-github/umi-locale-demo/node_modules/babel-preset-umi/lib/index.js',
                  {
                    targets: {
                      chrome: 49,
                      firefox: 64,
                      safari: 10,
                      edge: 13,
                      ios: 10
                    },
                    env: {
                      useBuiltIns: 'entry'
                    }
                  }
                ]
              ],
              plugins: [
                [
                  '/Users/jedi/workshop/an-github/umi-locale-demo/node_modules/babel-plugin-import/lib/index.js',
                  {
                    libraryName: 'antd',
                    libraryDirectory: 'es',
                    style: true
                  },
                  'antd'
                ],
                [
                  '/Users/jedi/workshop/an-github/umi-locale-demo/node_modules/babel-plugin-import/lib/index.js',
                  {
                    libraryName: 'antd-mobile',
                    libraryDirectory: 'es',
                    style: true
                  },
                  'antd-mobile'
                ],
                [
                  '/Users/jedi/workshop/an-github/umi-locale-demo/node_modules/babel-plugin-import/lib/index.js',
                  {
                    libraryName: 'ant-design-pro',
                    libraryDirectory: 'lib',
                    style: true,
                    camel2DashComponentName: false
                  },
                  'ant-design-pro'
                ],
                '/Users/jedi/workshop/an-github/umi-locale-demo/node_modules/babel-plugin-dva-hmr/lib/index.js',
                [
                  '/Users/jedi/workshop/an-github/umi-locale-demo/node_modules/babel-plugin-named-asset-import/index.js',
                  {
                    loaderMap: {
                      svg: {
                        ReactComponent: '/Users/jedi/workshop/an-github/umi-locale-demo/node_modules/af-webpack/lib/svgr.js?-prettier,-svgo![path]'
                      }
                    }
                  }
                ]
              ],
              cacheDirectory: true,
              babelrc: false,
              customize: '/Users/jedi/workshop/an-github/umi-locale-demo/node_modules/babel-preset-umi/lib/webpack-overrides.js'
            }
          }
        ]
      },
      /* config.module.rule('jsx') */
      {
        test: /\.jsx$/,
        include: [
          '/Users/jedi/workshop/an-github/umi-locale-demo'
        ],
        use: [
          /* config.module.rule('jsx').use('babel-loader') */
          {
            loader: '/Users/jedi/workshop/an-github/umi-locale-demo/node_modules/babel-loader/lib/index.js',
            options: {
              presets: [
                [
                  '/Users/jedi/workshop/an-github/umi-locale-demo/node_modules/babel-preset-umi/lib/index.js',
                  {
                    targets: {
                      chrome: 49,
                      firefox: 64,
                      safari: 10,
                      edge: 13,
                      ios: 10
                    },
                    env: {
                      useBuiltIns: 'entry'
                    }
                  }
                ]
              ],
              plugins: [
                [
                  '/Users/jedi/workshop/an-github/umi-locale-demo/node_modules/babel-plugin-import/lib/index.js',
                  {
                    libraryName: 'antd',
                    libraryDirectory: 'es',
                    style: true
                  },
                  'antd'
                ],
                [
                  '/Users/jedi/workshop/an-github/umi-locale-demo/node_modules/babel-plugin-import/lib/index.js',
                  {
                    libraryName: 'antd-mobile',
                    libraryDirectory: 'es',
                    style: true
                  },
                  'antd-mobile'
                ],
                [
                  '/Users/jedi/workshop/an-github/umi-locale-demo/node_modules/babel-plugin-import/lib/index.js',
                  {
                    libraryName: 'ant-design-pro',
                    libraryDirectory: 'lib',
                    style: true,
                    camel2DashComponentName: false
                  },
                  'ant-design-pro'
                ],
                '/Users/jedi/workshop/an-github/umi-locale-demo/node_modules/babel-plugin-dva-hmr/lib/index.js',
                [
                  '/Users/jedi/workshop/an-github/umi-locale-demo/node_modules/babel-plugin-named-asset-import/index.js',
                  {
                    loaderMap: {
                      svg: {
                        ReactComponent: '/Users/jedi/workshop/an-github/umi-locale-demo/node_modules/af-webpack/lib/svgr.js?-prettier,-svgo![path]'
                      }
                    }
                  }
                ]
              ],
              cacheDirectory: true,
              babelrc: false,
              customize: '/Users/jedi/workshop/an-github/umi-locale-demo/node_modules/babel-preset-umi/lib/webpack-overrides.js'
            }
          }
        ]
      },
      /* config.module.rule('extraBabelInclude_0') */
      {
        test: /\.jsx?$/,
        include: [
          function () { /* omitted long function */ }
        ],
        use: [
          /* config.module.rule('extraBabelInclude_0').use('babel-loader') */
          {
            loader: '/Users/jedi/workshop/an-github/umi-locale-demo/node_modules/babel-loader/lib/index.js',
            options: {
              presets: [
                [
                  '/Users/jedi/workshop/an-github/umi-locale-demo/node_modules/babel-preset-umi/lib/index.js',
                  {
                    transformRuntime: false
                  }
                ]
              ],
              cacheDirectory: true,
              babelrc: false,
              customize: '/Users/jedi/workshop/an-github/umi-locale-demo/node_modules/babel-preset-umi/lib/webpack-overrides.js'
            }
          }
        ]
      },
      /* config.module.rule('ts') */
      {
        test: /\.tsx?$/,
        use: [
          /* config.module.rule('ts').use('babel-loader') */
          {
            loader: '/Users/jedi/workshop/an-github/umi-locale-demo/node_modules/babel-loader/lib/index.js',
            options: {
              presets: [
                [
                  '/Users/jedi/workshop/an-github/umi-locale-demo/node_modules/babel-preset-umi/lib/index.js',
                  {
                    targets: {
                      chrome: 49,
                      firefox: 64,
                      safari: 10,
                      edge: 13,
                      ios: 10
                    },
                    env: {
                      useBuiltIns: 'entry'
                    }
                  }
                ]
              ],
              plugins: [
                [
                  '/Users/jedi/workshop/an-github/umi-locale-demo/node_modules/babel-plugin-import/lib/index.js',
                  {
                    libraryName: 'antd',
                    libraryDirectory: 'es',
                    style: true
                  },
                  'antd'
                ],
                [
                  '/Users/jedi/workshop/an-github/umi-locale-demo/node_modules/babel-plugin-import/lib/index.js',
                  {
                    libraryName: 'antd-mobile',
                    libraryDirectory: 'es',
                    style: true
                  },
                  'antd-mobile'
                ],
                [
                  '/Users/jedi/workshop/an-github/umi-locale-demo/node_modules/babel-plugin-import/lib/index.js',
                  {
                    libraryName: 'ant-design-pro',
                    libraryDirectory: 'lib',
                    style: true,
                    camel2DashComponentName: false
                  },
                  'ant-design-pro'
                ],
                '/Users/jedi/workshop/an-github/umi-locale-demo/node_modules/babel-plugin-dva-hmr/lib/index.js',
                [
                  '/Users/jedi/workshop/an-github/umi-locale-demo/node_modules/babel-plugin-named-asset-import/index.js',
                  {
                    loaderMap: {
                      svg: {
                        ReactComponent: '/Users/jedi/workshop/an-github/umi-locale-demo/node_modules/af-webpack/lib/svgr.js?-prettier,-svgo![path]'
                      }
                    }
                  }
                ]
              ],
              cacheDirectory: true,
              babelrc: false,
              customize: '/Users/jedi/workshop/an-github/umi-locale-demo/node_modules/babel-preset-umi/lib/webpack-overrides.js'
            }
          },
          /* config.module.rule('ts').use('ts-loader') */
          {
            loader: '/Users/jedi/workshop/an-github/umi-locale-demo/node_modules/ts-loader/index.js',
            options: {
              configFile: '/Users/jedi/workshop/an-github/umi-locale-demo/tsconfig.json',
              transpileOnly: true,
              errorFormatter: function () { /* omitted long function */ }
            }
          }
        ]
      },
      /* config.module.rule('cssModulesExcludes_0') */
      {
        test: filePath => filePath.indexOf(exclude) > -1,
        use: [
          /* config.module.rule('cssModulesExcludes_0').use('css-hot-loader') */
          {
            loader: '/Users/jedi/workshop/an-github/umi-locale-demo/node_modules/css-hot-loader/index.js'
          },
          /* config.module.rule('cssModulesExcludes_0').use('extract-css-loader') */
          {
            loader: '/Users/jedi/workshop/an-github/umi-locale-demo/node_modules/mini-css-extract-plugin/dist/loader.js',
            options: {
              publicPath: '/'
            }
          },
          /* config.module.rule('cssModulesExcludes_0').use('css-loader') */
          {
            loader: '/Users/jedi/workshop/an-github/umi-locale-demo/node_modules/css-loader/index.js',
            options: {
              importLoaders: 1,
              sourceMap: true
            }
          },
          /* config.module.rule('cssModulesExcludes_0').use('postcss-loader') */
          {
            loader: '/Users/jedi/workshop/an-github/umi-locale-demo/node_modules/postcss-loader/src/index.js',
            options: {
              ident: 'postcss',
              plugins: function () { /* omitted long function */ }
            }
          }
        ]
      },
      /* config.module.rule('cssModulesExcludes_1') */
      {
        test: filePath => filePath.indexOf(exclude) > -1,
        use: [
          /* config.module.rule('cssModulesExcludes_1').use('css-hot-loader') */
          {
            loader: '/Users/jedi/workshop/an-github/umi-locale-demo/node_modules/css-hot-loader/index.js'
          },
          /* config.module.rule('cssModulesExcludes_1').use('extract-css-loader') */
          {
            loader: '/Users/jedi/workshop/an-github/umi-locale-demo/node_modules/mini-css-extract-plugin/dist/loader.js',
            options: {
              publicPath: '/'
            }
          },
          /* config.module.rule('cssModulesExcludes_1').use('css-loader') */
          {
            loader: '/Users/jedi/workshop/an-github/umi-locale-demo/node_modules/css-loader/index.js',
            options: {
              importLoaders: 1,
              sourceMap: true
            }
          },
          /* config.module.rule('cssModulesExcludes_1').use('postcss-loader') */
          {
            loader: '/Users/jedi/workshop/an-github/umi-locale-demo/node_modules/postcss-loader/src/index.js',
            options: {
              ident: 'postcss',
              plugins: function () { /* omitted long function */ }
            }
          }
        ]
      },
      /* config.module.rule('cssModulesExcludes_2') */
      {
        test: filePath => filePath.indexOf(exclude) > -1,
        use: [
          /* config.module.rule('cssModulesExcludes_2').use('css-hot-loader') */
          {
            loader: '/Users/jedi/workshop/an-github/umi-locale-demo/node_modules/css-hot-loader/index.js'
          },
          /* config.module.rule('cssModulesExcludes_2').use('extract-css-loader') */
          {
            loader: '/Users/jedi/workshop/an-github/umi-locale-demo/node_modules/mini-css-extract-plugin/dist/loader.js',
            options: {
              publicPath: '/'
            }
          },
          /* config.module.rule('cssModulesExcludes_2').use('css-loader') */
          {
            loader: '/Users/jedi/workshop/an-github/umi-locale-demo/node_modules/css-loader/index.js',
            options: {
              importLoaders: 1,
              sourceMap: true
            }
          },
          /* config.module.rule('cssModulesExcludes_2').use('postcss-loader') */
          {
            loader: '/Users/jedi/workshop/an-github/umi-locale-demo/node_modules/postcss-loader/src/index.js',
            options: {
              ident: 'postcss',
              plugins: function () { /* omitted long function */ }
            }
          },
          /* config.module.rule('cssModulesExcludes_2').use('less-loader') */
          {
            loader: '/Users/jedi/workshop/an-github/umi-locale-demo/node_modules/less-loader/dist/cjs.js',
            options: {
              modifyVars: {
                '@font-size-base': '12px'
              },
              javascriptEnabled: true
            }
          }
        ]
      },
      /* config.module.rule('cssModulesExcludes_3') */
      {
        test: filePath => filePath.indexOf(exclude) > -1,
        use: [
          /* config.module.rule('cssModulesExcludes_3').use('css-hot-loader') */
          {
            loader: '/Users/jedi/workshop/an-github/umi-locale-demo/node_modules/css-hot-loader/index.js'
          },
          /* config.module.rule('cssModulesExcludes_3').use('extract-css-loader') */
          {
            loader: '/Users/jedi/workshop/an-github/umi-locale-demo/node_modules/mini-css-extract-plugin/dist/loader.js',
            options: {
              publicPath: '/'
            }
          },
          /* config.module.rule('cssModulesExcludes_3').use('css-loader') */
          {
            loader: '/Users/jedi/workshop/an-github/umi-locale-demo/node_modules/css-loader/index.js',
            options: {
              importLoaders: 1,
              sourceMap: true
            }
          },
          /* config.module.rule('cssModulesExcludes_3').use('postcss-loader') */
          {
            loader: '/Users/jedi/workshop/an-github/umi-locale-demo/node_modules/postcss-loader/src/index.js',
            options: {
              ident: 'postcss',
              plugins: function () { /* omitted long function */ }
            }
          }
        ]
      },
      /* config.module.rule('css') */
      {
        test: /\.css$/,
        exclude: [
          function () { /* omitted long function */ }
        ],
        use: [
          /* config.module.rule('css').use('css-hot-loader') */
          {
            loader: '/Users/jedi/workshop/an-github/umi-locale-demo/node_modules/css-hot-loader/index.js'
          },
          /* config.module.rule('css').use('extract-css-loader') */
          {
            loader: '/Users/jedi/workshop/an-github/umi-locale-demo/node_modules/mini-css-extract-plugin/dist/loader.js',
            options: {
              publicPath: '/'
            }
          },
          /* config.module.rule('css').use('css-loader') */
          {
            loader: '/Users/jedi/workshop/an-github/umi-locale-demo/node_modules/css-loader/index.js',
            options: {
              importLoaders: 1,
              sourceMap: true,
              modules: true,
              localIdentName: '[name]__[local]___[hash:base64:5]'
            }
          },
          /* config.module.rule('css').use('postcss-loader') */
          {
            loader: '/Users/jedi/workshop/an-github/umi-locale-demo/node_modules/postcss-loader/src/index.js',
            options: {
              ident: 'postcss',
              plugins: function () { /* omitted long function */ }
            }
          }
        ]
      },
      /* config.module.rule('css-in-node_modules') */
      {
        test: /\.css$/,
        include: [
          /node_modules/
        ],
        use: [
          /* config.module.rule('css-in-node_modules').use('css-hot-loader') */
          {
            loader: '/Users/jedi/workshop/an-github/umi-locale-demo/node_modules/css-hot-loader/index.js'
          },
          /* config.module.rule('css-in-node_modules').use('extract-css-loader') */
          {
            loader: '/Users/jedi/workshop/an-github/umi-locale-demo/node_modules/mini-css-extract-plugin/dist/loader.js',
            options: {
              publicPath: '/'
            }
          },
          /* config.module.rule('css-in-node_modules').use('css-loader') */
          {
            loader: '/Users/jedi/workshop/an-github/umi-locale-demo/node_modules/css-loader/index.js',
            options: {
              importLoaders: 1,
              sourceMap: true
            }
          },
          /* config.module.rule('css-in-node_modules').use('postcss-loader') */
          {
            loader: '/Users/jedi/workshop/an-github/umi-locale-demo/node_modules/postcss-loader/src/index.js',
            options: {
              ident: 'postcss',
              plugins: function () { /* omitted long function */ }
            }
          }
        ]
      },
      /* config.module.rule('less') */
      {
        test: /\.less$/,
        exclude: [
          function () { /* omitted long function */ }
        ],
        use: [
          /* config.module.rule('less').use('css-hot-loader') */
          {
            loader: '/Users/jedi/workshop/an-github/umi-locale-demo/node_modules/css-hot-loader/index.js'
          },
          /* config.module.rule('less').use('extract-css-loader') */
          {
            loader: '/Users/jedi/workshop/an-github/umi-locale-demo/node_modules/mini-css-extract-plugin/dist/loader.js',
            options: {
              publicPath: '/'
            }
          },
          /* config.module.rule('less').use('css-loader') */
          {
            loader: '/Users/jedi/workshop/an-github/umi-locale-demo/node_modules/css-loader/index.js',
            options: {
              importLoaders: 1,
              sourceMap: true,
              modules: true,
              localIdentName: '[name]__[local]___[hash:base64:5]'
            }
          },
          /* config.module.rule('less').use('postcss-loader') */
          {
            loader: '/Users/jedi/workshop/an-github/umi-locale-demo/node_modules/postcss-loader/src/index.js',
            options: {
              ident: 'postcss',
              plugins: function () { /* omitted long function */ }
            }
          },
          /* config.module.rule('less').use('less-loader') */
          {
            loader: '/Users/jedi/workshop/an-github/umi-locale-demo/node_modules/less-loader/dist/cjs.js',
            options: {
              modifyVars: {
                '@font-size-base': '12px'
              },
              javascriptEnabled: true
            }
          }
        ]
      },
      /* config.module.rule('less-in-node_modules') */
      {
        test: /\.less$/,
        include: [
          /node_modules/
        ],
        use: [
          /* config.module.rule('less-in-node_modules').use('css-hot-loader') */
          {
            loader: '/Users/jedi/workshop/an-github/umi-locale-demo/node_modules/css-hot-loader/index.js'
          },
          /* config.module.rule('less-in-node_modules').use('extract-css-loader') */
          {
            loader: '/Users/jedi/workshop/an-github/umi-locale-demo/node_modules/mini-css-extract-plugin/dist/loader.js',
            options: {
              publicPath: '/'
            }
          },
          /* config.module.rule('less-in-node_modules').use('css-loader') */
          {
            loader: '/Users/jedi/workshop/an-github/umi-locale-demo/node_modules/css-loader/index.js',
            options: {
              importLoaders: 1,
              sourceMap: true
            }
          },
          /* config.module.rule('less-in-node_modules').use('postcss-loader') */
          {
            loader: '/Users/jedi/workshop/an-github/umi-locale-demo/node_modules/postcss-loader/src/index.js',
            options: {
              ident: 'postcss',
              plugins: function () { /* omitted long function */ }
            }
          },
          /* config.module.rule('less-in-node_modules').use('less-loader') */
          {
            loader: '/Users/jedi/workshop/an-github/umi-locale-demo/node_modules/less-loader/dist/cjs.js',
            options: {
              modifyVars: {
                '@font-size-base': '12px'
              },
              javascriptEnabled: true
            }
          }
        ]
      },
      /* config.module.rule('sass') */
      {
        test: /\.(sass|scss)$/,
        exclude: [
          function () { /* omitted long function */ }
        ],
        use: [
          /* config.module.rule('sass').use('css-hot-loader') */
          {
            loader: '/Users/jedi/workshop/an-github/umi-locale-demo/node_modules/css-hot-loader/index.js'
          },
          /* config.module.rule('sass').use('extract-css-loader') */
          {
            loader: '/Users/jedi/workshop/an-github/umi-locale-demo/node_modules/mini-css-extract-plugin/dist/loader.js',
            options: {
              publicPath: '/'
            }
          },
          /* config.module.rule('sass').use('css-loader') */
          {
            loader: '/Users/jedi/workshop/an-github/umi-locale-demo/node_modules/css-loader/index.js',
            options: {
              importLoaders: 1,
              sourceMap: true,
              modules: true,
              localIdentName: '[name]__[local]___[hash:base64:5]'
            }
          },
          /* config.module.rule('sass').use('postcss-loader') */
          {
            loader: '/Users/jedi/workshop/an-github/umi-locale-demo/node_modules/postcss-loader/src/index.js',
            options: {
              ident: 'postcss',
              plugins: function () { /* omitted long function */ }
            }
          }
        ]
      },
      /* config.module.rule('sass-in-node_modules') */
      {
        test: /\.(sass|scss)$/,
        include: [
          /node_modules/
        ],
        use: [
          /* config.module.rule('sass-in-node_modules').use('css-hot-loader') */
          {
            loader: '/Users/jedi/workshop/an-github/umi-locale-demo/node_modules/css-hot-loader/index.js'
          },
          /* config.module.rule('sass-in-node_modules').use('extract-css-loader') */
          {
            loader: '/Users/jedi/workshop/an-github/umi-locale-demo/node_modules/mini-css-extract-plugin/dist/loader.js',
            options: {
              publicPath: '/'
            }
          },
          /* config.module.rule('sass-in-node_modules').use('css-loader') */
          {
            loader: '/Users/jedi/workshop/an-github/umi-locale-demo/node_modules/css-loader/index.js',
            options: {
              importLoaders: 1,
              sourceMap: true
            }
          },
          /* config.module.rule('sass-in-node_modules').use('postcss-loader') */
          {
            loader: '/Users/jedi/workshop/an-github/umi-locale-demo/node_modules/postcss-loader/src/index.js',
            options: {
              ident: 'postcss',
              plugins: function () { /* omitted long function */ }
            }
          }
        ]
      },
      /* config.module.rule('svg') */
      {
        test: /\.svg$/i,
        use: [
          /* config.module.rule('svg').use('svg-sprite-loader') */
          {
            loader: '/Users/jedi/workshop/an-github/umi-locale-demo/node_modules/svg-sprite-loader/lib/loader.js'
          }
        ]
      }
    ]
  },
  optimization: {
    splitChunks: {
      chunks: 'async',
      name: 'vendors'
    },
    runtimeChunk: false
  },
  plugins: [
    /* config.plugin('extract-css') */
    new MiniCssExtractPlugin(
      {
        filename: '[name].css',
        chunkFilename: '[name].chunk.css'
      }
    ),
    /* config.plugin('define') */
    new DefinePlugin(
      {
        'process.env': {
          NODE_ENV: '"development"'
        },
        'process.env.BASE_URL': '"/"',
        __UMI_BIGFISH_COMPAT: undefined,
        __UMI_HTML_SUFFIX: 'false'
      }
    ),
    /* config.plugin('progress') */
    new WebpackBarPlugin(
      {
        color: 'green',
        reporters: [
          'fancy'
        ]
      }
    ),
    /* config.plugin('ignore-moment-locale') */
    new IgnorePlugin(
      /^\.\/locale$/,
      /moment$/
    ),
    /* config.plugin('copy-public') */
    new CopyWebpackPlugin(
      [
        {
          from: '/Users/jedi/workshop/an-github/umi-locale-demo/public',
          to: '/Users/jedi/workshop/an-github/umi-locale-demo/dist',
          toType: 'dir'
        }
      ]
    ),
    /* config.plugin('filter-css-conflicting-warnings') */
    new FilterCSSConflictingWarning(),
    /* config.plugin('friendly-errors') */
    new FriendlyErrorsWebpackPlugin(
      {
        clearConsole: false
      }
    ),
    /* config.plugin('hmr') */
    new HotModuleReplacementPlugin()
  ],
  entry: {
    umi: [
      '/Users/jedi/workshop/an-github/umi-locale-demo/node_modules/af-webpack/lib/webpackHotDevClient.js',
      '/Users/jedi/workshop/an-github/umi-locale-demo/src/pages/.umi/umi.js'
    ]
  }
}