const countOnly = require('../countOnly');
const result1 = require('../countOnly');


const {assert} = require('chai');

describe('#countOnly', () => {

  it('Jason is seleted and there is one Jason', () => {
    assert.strictEqual(result1["Jason"], 1);
  });
  it('Karina is selected and there are no Karainas', () => {
    assert.strictEqual(result1["Karima"], undefined);
  });
  it('Fang is selected and there are two Fangs.', () => {
    assert.strictEqual(result1["Fang"], 2);
  });


});