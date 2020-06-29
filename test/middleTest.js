// const assertArraysEqual = require('../assertArraysEqual')
const middle = require('../middle');

const { assert } = require('chai');

// console.log(assertArraysEqual(middle(['one', 'two', 'three', 'four']), ['two', 'three'])); // => true (this will pass)

describe('#middle', () => {

  it('# returns [2,3] for [1,2,3,4]', () => {
    assert.deepEqual(middle([1,2,3,4]), [2,3]);
  });
  it('# returns [2] for [1,2,3]', () => {
    assert.deepEqual(middle([1,2,3]), [2]);
  });

});