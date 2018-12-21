// import { writeFileSync } from 'fs';

export default config => {
  config.resolve.modules.add('src');
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

  // writeFileSync(`${__dirname.replace(/config/, 'temp.js')}`, config);
};
