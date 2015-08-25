import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    vote(option) {
      option.incrementProperty('votes');

      option.save().then(() => {
        this.transitionTo('poll.results', this.controller.model);
      });
    }
  }
});
