const assertEqual = function(actual, expected) {
  if (actual == expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🚫🚫🚫 Assertion Failed: ${actual} !== ${expected}`);
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
assertEqual(result, testCase);
