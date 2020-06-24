
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

// ************************************************************



const letterPositions = function(str) {
  let result = {};
  // if i can loop through this, i can do the next step.
  for (let i in str) {
    // i is index
    // console.log(i);
    // str[i[] is the letter
    // if see a space, skip it
    // console.log(str[i]);
    if (str[i]!== ' ') {
      if (result[str[i]]) {
        result[str[i]].push(Number(i));
      } else {
        result[str[i]] = [Number(i)];
      }
    }
  }
  return result;
}


const string = 'hello';

console.log(letterPositions(string))


// // count how many times each letter appears in a word.
// const countLetter = function (word) {

// }


console.log(assertArraysEqual(letterPositions('hello').e, [1])); // => true (this will pass)