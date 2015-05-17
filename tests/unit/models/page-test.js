import { moduleForModel, test } from 'ember-qunit';

moduleForModel('page', 'Unit | Model | page', {
  // Specify the other units that are required for this test.
  needs: []
});

test('it has a title', function(assert) {
  var model = this.subject({
    title: 'page title'
  });
  assert.equal('page title', model.get('title'));
});

test('it has an html body', function(assert) {
  var model = this.subject({
    body: '<p>compiled <strong>html</strong> body</p>'
  });
  assert.equal('<p>compiled <strong>html</strong> body</p>', model.get('body'));
});
