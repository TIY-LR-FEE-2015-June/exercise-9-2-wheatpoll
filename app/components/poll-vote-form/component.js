import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['card', 'poll-vote-form'],
  selected: null,
  poll: null,

  actions: {
    vote() {
      var selected = this.get('selected');

      if (selected) {
        return this.sendAction('vote', selected);
      }

      alert('You have to choose fool!');
    }
  }
});
