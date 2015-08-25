import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.createRecord('poll');
  },

  actions: {
    createNewPoll(data) {
      var poll = this.controller.model;

      poll.set('question', data.question);

      var promises = data.options.map((pollOption) => {
        var record = this.store.createRecord('poll-option', pollOption);
        poll.get('options').pushObject(record);

        return record.save();
      });

      promises.push(poll.save());

      Ember.RSVP.all(promises).then(() => {
        this.transitionTo('poll.vote', poll);
      });
    }
  }
});
