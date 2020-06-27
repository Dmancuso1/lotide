
const assertEqual = require('./assertEqual')

// Implement the function findKeyByValue which takes in an object and a value. It should scan the object and return the first key which contains the given value. If no key with that given value is found, then it should return undefined.


const findKeyByValue = function (obj, val) {
  const keys = Object.keys(obj)
  const values = Object.values(obj)
  let result = "";
  if (!values.includes(val)) {
    return undefined
  }
    for (let key of keys) {
      console.log('key is: ', obj[key] + ' val is ', val)
      if (obj[key] === val) {
        result = key;
      }
    }
  return result
};

const object = {
  name: "Dane",
  gender: "Male",
  email: "123@123.com"
}
const value = "Dane";

console.log(findKeyByValue(object, value));


assertEqual(findKeyByValue(object, "Dane"), "name");
assertEqual(findKeyByValue(object, "random value.."), undefined);
