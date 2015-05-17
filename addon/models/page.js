import DS from 'ember-data';

export default DS.Model.extend({
  id: DS.attr('string'),
  title: DS.attr('string'),
  body: DS.attr('string')
});
