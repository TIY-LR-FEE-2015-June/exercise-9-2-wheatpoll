import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('create', {path: '/'});

  this.route('poll', {path: '/:poll_id'}, function() {
    this.route('vote', {path: '/'});
    this.route('results');
  });
});

export default Router;
