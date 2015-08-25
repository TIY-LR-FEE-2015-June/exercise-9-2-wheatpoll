import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['card', 'poll-create-form'],
  poll: null,
  question: '',
  options: [],

  resetForm: Ember.on('init', function() {
    var poll = this.get('poll');

    if (poll) {
      this.setProperties(poll.toJSON());
    }

    if (!this.get('options.length')) {
      this.set('options', [
        {name: ''},
        {name: ''},
        {name: ''},
        {name: ''},
      ]);
    }
  }),

  actions: {
    enter() {
      var data = this.getProperties('question', 'options');

      this.sendAction('submit', data);
    }
  }
});
