import { writeFileSync } from 'fs';

export default (config, { webpack }) => {
  config.resolve.modules.add('src');
  // 动态国际化需要
  config.resolve.modules.add('public');
  // 排除 ejs svg
  config.module.rules
    .get('exclude')
    .exclude.add(/\.ejs$/)
    .add(/.svg$/)
    .end();

  config.module
    .rule('svg')
    .test(/\.svg$/i)
    .use('svg-sprite-loader')
    .loader(require.resolve('svg-sprite-loader'));
  // 增加alias
  config.resolve.alias
    .set('@compose', 'shared/utils/compose')
    .set('@utils', 'shared/utils')
    .set('@components', 'shared/components');
  if (process.env.NODE_ENV === 'production') {
    config
      .plugin('language')
      .use(webpack.IgnorePlugin, [/^\.\/js|json/, /public\/lang$/]);
  }
  writeFileSync(`${__dirname.replace(/config/, 'temp.js')}`, config);
};
