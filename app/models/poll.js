import DS from 'ember-data';
import Ember from 'ember';

export default DS.Model.extend({
  question: DS.attr('string'),
  options: DS.hasMany('poll-option', {async: true}),

  totalVotes: Ember.computed('options.@each.votes', function() {
    return this.get('options').reduce((prev, current) => {
      return prev + current.get('votes');
    }, 0);
  }),
});
