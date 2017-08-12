define('site-code/initializers/app-version', ['exports', 'ember-cli-app-version/initializer-factory', 'site-code/config/environment'], function (exports, _emberCliAppVersionInitializerFactory, _siteCodeConfigEnvironment) {
  var _config$APP = _siteCodeConfigEnvironment['default'].APP;
  var name = _config$APP.name;
  var version = _config$APP.version;
  exports['default'] = {
    name: 'App Version',
    initialize: (0, _emberCliAppVersionInitializerFactory['default'])(name, version)
  };
});