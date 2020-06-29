const assertArraysEqual = require('../assertArraysEqual');


console.log(assertArraysEqual(["1", "2", "3"], ["1", "2", "3"])); // => true (this will pass)
console.log(assertArraysEqual(["133", "233", "333"], ["133", "233", "333"])); // => false (this will fail)
// console.log(assertArraysEqual(["1", "2", "3"], ["1", "2", 3])); // => false (this will fail)
