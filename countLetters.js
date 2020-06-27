const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect; // <= add this line
  const result = eqObjects(actual, expected);
  if (result) {
    console.log(`✅✅✅ Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
  } else {
    console.log(`🚫🚫🚫 Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
  }
};

// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
const eqObjects = function(object1, object2) {
  obj1Keys = Object.keys(object1);
  obj2Keys = Object.keys(object2);
  if (obj1Keys.length !== obj2Keys.length) {
    return false;
  } else {
    for (let key of obj1Keys) {
      if (Array.isArray(object1[key]) && Array.isArray(object2[key])) {
        // console.log('they are both arrays')
        return eqArrays(object1[key], object2[key]);
      }
      if (object1[key] !== object2[key]) {
        return false;
      } 
 
      // console.log((Array.isArray(object2[key])));

    }
    return true
  }
};



const countLetters = function (words) {
  const results = {};
  const cleanStr = words.replace(/ +/g, "");
  for (let letter of cleanStr) {
    // console.log(letter);
    if (results[letter] === undefined) {
      results[letter] = 1;
    } else {
      results[letter] ++;
    }
  }
  return results;
};


const sentence = "lighthouse in the house";



const result = countLetters(sentence);

console.log(result);
const testCase = { l: 1, i: 2, g: 1, h: 4, t: 2, o: 2, u: 2, s: 2, e: 3, n: 1 };
console.log(testCase)
assertObjectsEqual(result, testCase);
