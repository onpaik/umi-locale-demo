export default (api, option) => {
  api.modifyRouterRootComponent(
    `require('connected-react-router').ConnectedRouter`,
  );
  api.addRouterImport({
    source: 'connected-react-router',
    specifier: '{ ConnectedRouter }',
  });
  // const routerRoot = api.applyPlugins('modifyRouterRootComponent');
};
