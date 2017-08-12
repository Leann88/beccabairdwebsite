define('site-code/tests/helpers/resolver', ['exports', 'site-code/resolver', 'site-code/config/environment'], function (exports, _siteCodeResolver, _siteCodeConfigEnvironment) {

  var resolver = _siteCodeResolver['default'].create();

  resolver.namespace = {
    modulePrefix: _siteCodeConfigEnvironment['default'].modulePrefix,
    podModulePrefix: _siteCodeConfigEnvironment['default'].podModulePrefix
  };

  exports['default'] = resolver;
});