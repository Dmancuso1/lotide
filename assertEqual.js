//https://developer.mozilla.org/en-US/docs/Web/API/console/assert

const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`Assertion Passed: ✅ ${actual} === ${expected}`);
  }
  console.assert(actual === expected, `🚫 ${actual} !== ${expected}`);
};

assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);
assertEqual(2, 5);
assertEqual("The", "the");