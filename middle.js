const assertArraysEqual = function (arr1, arr2) {
 
  if (arr1.length !== arr2.length) {
    return `🚫🚫🚫 Assertion Failed: ${arr1} !== ${arr2}`;
  } else {
    for (let i = 0; i < arr1.length; i++) {
      if (arr1[i] !== arr2[i]) {
        return `🚫🚫🚫 Assertion Failed: ${arr1} !== ${arr2}`;
      }
    }
    return `✅✅✅ Assertion Passed: ${arr1} === ${arr2}`;
  }
};


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
