import webpackConfig from './webpack.config';
// import routes from './router.config';
import plugins from './plugins.config';

export default {
  plugins,
  hash: true,
  ignoreMomentLocale: true,
  manifest: {
    basePath: '/',
  },
  chainWebpack: webpackConfig,
  theme: './theme-config.js',
  urlLoaderExcludes: [/.svg$/, /.ejs$/],
  // '../node_modules/af-webpack/lib/getConfig/css.js#opts.cssModulesWithAffix'
  cssModulesWithAffix: false,
  // https://github.com/umijs/umi/tree/master/docs/config#treeshaking-
  treeShaking: true,
};
