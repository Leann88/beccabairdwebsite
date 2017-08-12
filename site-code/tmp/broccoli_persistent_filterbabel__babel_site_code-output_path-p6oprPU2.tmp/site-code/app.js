define('site-code/app', ['exports', 'ember', 'site-code/resolver', 'ember-load-initializers', 'site-code/config/environment'], function (exports, _ember, _siteCodeResolver, _emberLoadInitializers, _siteCodeConfigEnvironment) {

  var App = undefined;

  _ember['default'].MODEL_FACTORY_INJECTIONS = true;

  App = _ember['default'].Application.extend({
    modulePrefix: _siteCodeConfigEnvironment['default'].modulePrefix,
    podModulePrefix: _siteCodeConfigEnvironment['default'].podModulePrefix,
    Resolver: _siteCodeResolver['default']
  });

  (0, _emberLoadInitializers['default'])(App, _siteCodeConfigEnvironment['default'].modulePrefix);

  exports['default'] = App;
});