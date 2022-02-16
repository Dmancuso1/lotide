const head = require('./head');
const tail = require('./tail');
const middle = require('./middle');
const assertArraysEqual = require('./assertArraysEqual').default;
const assertEqual = require('./assertEqual');
const eqArrays = require('./eqArrays');

const flatten = require('./flatten');
const countOnly = require('./countOnly');
// const letterPositions = require('./letterPositions');
// const findKeyByValue = require('./findKeyByValue');
// const eqObjects = require('./eqObjects');

console.log(head('hello'))



module.exports = {
  head,
  tail,
  middle,
  assertArraysEqual,
  assertEqual,
  eqArrays,
  flatten,
  countOnly,
  // letterPositions
  // findKeyByValue
  // eqObjects
}

//console.log(module)