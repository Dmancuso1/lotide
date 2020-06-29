// const assertEqual = require('../assertEqual');
const tail = require('../tail');
const { assert } = require('chai');



describe('#Tail', () => {

  it('returns "Labs" for ["Lighthouse", "Labs"]', () => {
    assert.strictEqual(tail(["Lighthouse", "Labs"]), "Labs")
  });

});