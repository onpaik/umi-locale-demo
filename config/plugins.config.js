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
      enable: true,
      baseNavigator: true,
      momentLocaleMap: { en: 'en-nz', zh: 'zh-cn' },
      antLocaleMap: { en: 'en_US', zh: 'zh_CN' },
      localeMap: { zh: 'zh-CN', en: 'en-US' },
      default: 'en',
      translate: true,
      dynamicIntl: true,
    },
  ],
];
