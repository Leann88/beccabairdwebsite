define('site-code/tests/test-helper', ['exports', 'site-code/tests/helpers/resolver', 'ember-qunit'], function (exports, _siteCodeTestsHelpersResolver, _emberQunit) {

  (0, _emberQunit.setResolver)(_siteCodeTestsHelpersResolver['default']);
});