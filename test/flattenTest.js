
const flatten = require('../flatten');

const { assert } = require('chai');

describe('#flatten', () => {

  it('#[1, 2, [3, 4], 5, [6]] should be [1, 2, 3, 4, 5, 6] ',() => {
    assert.deepEqual(flatten([1, 2, [3, 4], 5, [6]]), [1, 2, 3, 4, 5, 6])
  });
  it('#[1, 2, [3, 4], 5, [6], [8, 9, 10]] should be [1, 2, 3, 4, 5, 6, 8, 9, 10] ',() => {
    assert.deepEqual(flatten([1, 2, [3, 4], 5, [6], [8, 9, 10]]), [1, 2, 3, 4, 5, 6, 8, 9, 10])
  });

});