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

export default assertArraysEqual;

// console.log(assertArraysEqual(["1", "2", "3"], ["1", "2", "3"])); // => true (this will pass)
// console.log(assertArraysEqual(["1", "2", "3"], ["1", "2", 3])); // => false (this will fail)