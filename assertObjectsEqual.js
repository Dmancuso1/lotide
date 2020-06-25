
// Implement assertObjectsEqual which will take in TWO OBJECTS and console.log an appropriate message to the console...
const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect; // <= add this line
  const result = eqObjects(actual, expected);
  if (result) {
    console.log(`✅✅✅ Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
  } else {
    console.log(`🚫🚫🚫 Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
  }
};


// Checks if two arrays are the same. 
// helper function for eObjects(__,__)
const eqArrays = function (arr1, arr2) {

  if (arr1.length !== arr2.length) {
    return false;
  } else {
    for (let i = 0; i < arr1.length; i++) {
      if (arr1[i] !== arr2[i]) {
        return false;
      }
    }
    return true;
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


// ------------------------------------

// SAMPLE/TEST DATA
const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
const abc = { a: "1", b: "2", c: "3" };

// console.log(eqObjects(ab, ba)); // => true

// Testing with assertObjectsEqual
assertObjectsEqual(ab, ba); // true
assertObjectsEqual(ab, abc); // false