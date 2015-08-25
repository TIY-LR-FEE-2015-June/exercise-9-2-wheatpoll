import DS from 'ember-data';

export default DS.Model.extend({
  question: DS.attr('string'),
  options: DS.hasMany('poll-option'),
});
