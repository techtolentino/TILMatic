import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('days', function() {
    this.route('gems', function() {
      this.route('new');
    });
  });
});

export default Router;
