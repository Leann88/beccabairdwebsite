define('site-code/router', ['exports', 'ember', 'site-code/config/environment'], function (exports, _ember, _siteCodeConfigEnvironment) {

  var Router = _ember['default'].Router.extend({
    location: _siteCodeConfigEnvironment['default'].locationType,
    rootURL: _siteCodeConfigEnvironment['default'].rootURL
  });

  Router.map(function () {});

  exports['default'] = Router;
});