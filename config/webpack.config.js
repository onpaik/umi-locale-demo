// import { writeFileSync } from 'fs';

export default config => {
  config.resolve.modules.add('src');
  // 动态国际化需要
  config.resolve.modules.add('public');
  // 排除 ejs svg
  config.module.rules
    .get('exclude')
    .exclude.add(/\.ejs$/)
    .add(/.svg$/)
    .end();
  // svg 单独使用loader
  config.module
    .rule('svg')
    .test(/\.svg$/i)
    .use('svg-sprite-loader')
    .loader(require.resolve('svg-sprite-loader'));
  // 增加alias
  config.resolve.alias.set('compose', 'shared/utils/compose');
  // writeFileSync(`${__dirname.replace(/config/, 'temp.js')}`, config);
};
