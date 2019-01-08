// import { writeFileSync } from 'fs';

export default config => {
  config.resolve.modules.add('src');

  config.module
    .rule('svg')
    .test(/\.svg$/i)
    .use('svg-sprite-loader')
    .loader(require.resolve('svg-sprite-loader'));
  // lint build模式lint代码
  if (process.env.NODE_ENV === 'production') {
    config.module
      .rule('lint-rule')
      .test(/\.js$/)
      .use('eslint-loader')
      .loader(require.resolve('eslint-loader'), {
        formatter: require('eslint-friendly-formatter'),
        emitWarning: false,
      });
  }
  // 增加alias
  config.resolve.alias
    .set('@compose', 'shared/utils/compose')
    .set('@utils', 'shared/utils')
    .set('@components', 'shared/components');

  // writeFileSync(`${__dirname.replace(/config/, 'temp.js')}`, config);
};
