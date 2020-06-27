//https://developer.mozilla.org/en-US/docs/Web/API/console/assert


const assertEqual = require('./assertEqual')


const head = function(head) {
  const first = head[0];
  return first;
};



assertEqual(head([5,6,7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
