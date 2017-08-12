import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.resource('Home', { path: '' }, function() {
    this.resource('main.home', { path: 'Home' }, function() {});
  });
  this.route('Home');
});

export default Router;
