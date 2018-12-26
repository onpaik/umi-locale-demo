export default [
  // ref: https://umijs.org/plugin/umi-plugin-react.html
  [
    'umi-plugin-react',
    {
      antd: true,
      dva: {
        // immer: true,
        hmr: true,
      },
      targets: {
        ie: 11,
      },
      dynamicImport: {
        webpackChunkName: true,
        loadingComponent: 'shared/components/PageLoading/',
      },
      esLint: true,
      locale: false,
      title: 'umi-locale-demo',
      fastClick: true,
      routes: {
        exclude: [/(consts|models|messages|locales|actions)/, /model\.js/],
      },
      // pwa: {
      //   workboxOptions: {
      //     importWorkboxFrom: 'local',
      //   },
      // },
    },
  ],
  [
    'umi-plugin-locale-paik',
    {
      locale: {
        baseNavigator: true,
        momentMap: { en: 'en-nz', zh: 'zh-cn' },
        antdMap: { en: 'en_US', zh: 'zh_CN' },
        fileMap: { zh: 'zh-CN', en: 'en-US' },
        default: 'zh',
      },
      translate: {
        support: {
          enUS: 'en-US',
          zhCN: 'zh-CN',
          zhTW: 'zh-TW',
          zhHK: 'zh-HK',
        },
      },
      dynamicIntl: true,
    },
  ],
];
