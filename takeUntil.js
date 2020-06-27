const assertArraysEqual = require('./assertArraysEqual')


const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];  // expected output [ 1, 2, 5, 7, 2 ]
const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"]; // expected out put: [ 'I\'ve', 'been', 'to', 'Hollywood' ]


const takeUntil = function(array, callback) {
  const newArr = [];
  for (let arr of array) {
    if (!callback(arr)) {
      newArr.push(arr)
    } else {
      break;
    }
  }
  return newArr;
}

const results1 = takeUntil(data1, x => x < 0);
console.log(results1);

const results2 = takeUntil(data2, x => x === ',');
console.log(results2);


// -------------------------------------------------------------------
console.log(assertArraysEqual(results1, [ 1, 2, 5, 7, 2 ])); // => true (this will pass)
console.log(assertArraysEqual(results2, [ 'I\'ve', 'been', 'to', 'Hollywood' ])); // => false (this will fail)