const assertArraysEqual = require('./assertArraysEqual')


const without = function(list, unwanted) {
  let newList = list.filter(function(item) {
    return !unwanted.includes(item);
  });
  return newList;
};


const originalArr = ['this', 'is', 'the OG', 'array'];
console.log(without(originalArr, ['this', 'is']));

// Tests to see if original array is unchanged.
console.log(assertArraysEqual(originalArr, ['this', 'is', 'the OG', 'array'])); // => true (this will pass)
