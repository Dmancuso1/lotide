const assertArraysEqual = function(arr1, arr2) {
 
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
