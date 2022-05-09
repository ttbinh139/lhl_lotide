const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`Assertion Fail: ${actual} !== ${expected}`);
  }
};

const eqArrays = function(array1, array2) {
  if (array1.length !== array2.length) {
    return false;
  }
  let length = array1.length;
  for (let i = 0; i < length; i++) {
    if (array1[i] !== array2[i]) {
      return false;
    }
  }
  return true;
};

const eqObjects = function(object1, object2) {

  if (Object.keys(object1).length !== Object.keys(object2).length) {
    return false;
  }

  for (const key in object1) {
    //console.log(key);
    if (!object2[key]) {
      return false;
    } else {
      if (Array.isArray(object1[key]) && Array.isArray(object2[key])) {
        if (eqArrays(object1[key], object2[key] === false)) {
          return false;
        }
      } else if (object1[key] !== object2[key]) {
        return false;
      }
    }
  }
  return true;
};

/* const ab = { a: "1", b: "2", c: "5" };
const ba = { a: "1", b: "2", c: "5" };
//console.log(eqObjects(ab, ba)); // => true

const abc = { a: "1", b: "2", d: "3" };
//console.log(eqObjects(ab, abc)); // => false

const cd = { c: true };
const dc = { d: ["2", 3], c: "1" };
//console.log(eqObjects(cd, dc)); // => true

const cd2 = { c: false };
console.log(eqObjects(cd, cd2)); // => false */

module.exports = eqObjects;
