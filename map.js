/*
Our map function will take in two arguments:

An array to map
A callback function
The map function will return a new array based on the results of the callback function.
*/

const assertArraysEqual = require('./assertArraysEqual')




const words = ["ground", "control", "to", "major", "tom"];
const words2 = ['tangle', 'snake', 'bird'];
const words3 = ['a song name', 'a movie name', '1 should be one'];



const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};

const results1 = map(words, word => word[0]);
const results2 = map(words2, word => word[0]);
const results3 = map(words3, word => word[0]);
// console.log(results1);
// console.log(results2);
// console.log(results3);


console.log(assertArraysEqual(results1, ["g", "c", "t", "m", "t"])); //
console.log(assertArraysEqual(results2, ['t', 's', 'b'])); //
console.log(assertArraysEqual(results3, ['a', 'a', '1'])); //