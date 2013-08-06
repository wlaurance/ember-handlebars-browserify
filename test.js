var h = require('./handlebars'),
    assert = require('assert');

describe('handlbars browserify', function() {
  /*
   * Since this is really just the handlebars for ember
   * node wrapper and the code is PURE js, the tests should 
   * reveal a standard Handlebars object
   */

  it('should have a template method', function() {
    assert.equal('function', typeof h.template);
  });
});
