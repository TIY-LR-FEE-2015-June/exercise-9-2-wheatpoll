import Ember from 'ember';

export default Ember.Component.extend({
  selected: null,
  poll: null,

  chartData: Ember.computed('poll.options.@each.votes', 'poll.options.@each.name', function() {
    return this.get('poll.options').reduce(function(prev, option) {
      prev.labels.push(option.get('name'));
      prev.series.push(option.get('votes'));

      return prev;
    }, {labels: [], series: []});
  }),

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
