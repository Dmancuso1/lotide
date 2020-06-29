const assertEqual = require('../assertEqual');
const tail = require('../tail');

assertEqual(tail(["Hello", "Lighthouse", "Labs"]), "Labs"); 