

const assertArraysEqual = require('./assertArraysEqual')



const flatten = function(arr) {
  let flattened = [];
  for (let x of arr) {
    if (Array.isArray(x)) {
      for (let i = 0; i < x.length; i++) {
        flattened.push(x[i]);
      }
    } else {
      flattened.push(x);
    }
  }
  return flattened;
};


const inputArray = [1, 2, [3, 4], 5, [6]];
flatten(inputArray); // => [1, 2, 3, 4, 5, 6]

const inputArray2 = [1, 2, [3, 4], 5, [6], [8, 9, 10]];
flatten(inputArray2); // => [1, 2, 3, 4, 5, 6, 8, 9, 10]

console.log(assertArraysEqual(flatten(inputArray), [1, 2, 3, 4, 5, 6]));
console.log(assertArraysEqual(flatten(inputArray2), [1, 2, 3, 4, 5, 6, 8, 9, 10]));