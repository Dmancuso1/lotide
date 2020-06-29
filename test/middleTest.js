const assertArraysEqual = require('../assertArraysEqual')
const middle = require('../middle');


console.log(assertArraysEqual(middle(['one', 'two', 'three', 'four']), ['two', 'three'])); // => true (this will pass)