// const assertArraysEqual = require('./assertArraysEqual')


const middle = function (main) {
  let newArr = []
  if (main.length < 3) {
    return newArr;
  }
  if (main.length % 2 === 0) {
    // console.log('main array is even');
    newArr.push(main[main.length/2 -1])
    newArr.push(main[main.length/2])
    return newArr
  } else {
    // console.log('main array is odd');
    newArr.push(main[((main.length + 1) / 2) -1]);
    return newArr
  }
};

module.exports = middle;

// console.log(assertArraysEqual(middle(['one', 'two', 'three', 'four']), ['two', 'three'])); // => true (this will pass)
