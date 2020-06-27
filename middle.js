const assertArraysEqual = require('./assertArraysEqual')


const mainArr = ['one', 'two', 'three', 'four'];
let newArr = []
const middle = function (main) {
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

console.log(middle(mainArr));

console.log(assertArraysEqual(newArr, ['two', 'three'])); // => true (this will pass)
