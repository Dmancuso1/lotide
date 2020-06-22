
let newArr = [];

const tail = function (tail) {
  newArr = tail.slice(1);
  return newArr;
}

const assertEqual = function(actual, expected) {
  console.assert((result[0] === expected[0]) && (result[1] === expected[1]), `🚫 ${actual} !== ${expected}`);
};


const result = tail(["Hello", "Lighthouse", "Labs"]);

assertEqual(result, ["Lighthouse", "Labs"]); // => will always fail!

// assertEqual("Lighthouse Labs", "Bootcamp");
// assertEqual(1, 1);
// assertEqual(2, 5);
// assertEqual("The", "the");