import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('Home', { path: '' }, function() {
    this.route('main.home', { path: '/Home' }, function() {});
  });
  this.route('Home', { path: '/Home' });
  this.route('choleric-vision', { path: '/choleric-vision' });
  this.route('portfolio-index');
  this.route('by-the-numbers');
  this.route('project-oleum');
  this.route('scavenger-app-prototype');
  this.route('sushi-master');
  this.route('contact');
});

export default Router;
