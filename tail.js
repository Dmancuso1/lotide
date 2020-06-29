

// const assertEqual = require('./assertEqual')

const tail = function(tail) {
  const last = tail[tail.length -1];
  return last;
};


// assertEqual(tail(["Hello", "Lighthouse", "Labs"]), "Labs"); 


module.exports = tail

