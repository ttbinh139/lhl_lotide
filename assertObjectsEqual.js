const eqObjects = function(object1, object2) {
  console.log(object1);
  if (Object.keys(object1).length !== Object.keys(object2).length) {
    return false;
  }

  for (const key in object1) {
    if (!object2[key]) {
      return false;
    } else {
      console.log(key);
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

const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;

  const flag = eqObjects(actual, expected);

  if (flag === true) {
    console.log(`✅✅✅ Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
  } else if (flag === false) {
    console.log(`🛑🛑🛑 Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
  }
};

const ab = { a: "1", b: "2", c: [2] };
const ba = { a: "1", b: "2", c: [1] };
//assertObjectsEqual(ab, ba);

const cd = { c: "1", d: [ 2, 3], de: true };
const dc = { d: [ 2, 3], c: "1", de: true};
assertObjectsEqual(cd, dc);