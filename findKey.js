// const assertEqual = function(actual, expected) {
//   if (actual === expected) {
//     console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
//   } else {
//     console.log(`🚫🚫🚫 Assertion Failed: ${actual} !== ${expected}`);
//   }
// };
const assertEqual = require('./assertEqual')
// --------------------------------------

let results = "";

const findKey = function (obj, callback) {
  for (let key in obj) {
    if (callback(obj[key])) {
      results = key;
      return results;
    }
  }
  results = undefined;
  return results;
};


console.log (findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 3)) // => "Akaleri"


// --------------------------------------
assertEqual(results, "Akaleri");


