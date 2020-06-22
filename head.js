//https://developer.mozilla.org/en-US/docs/Web/API/console/assert


const head = function(head) {
  const first = head[0];
  return first;
};


const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`Assertion Passed: ✅ ${actual} === ${expected}`);
  }
  console.assert(actual === expected, `🚫 ${actual} !== ${expected}`);
};




assertEqual(head([5,6,7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
