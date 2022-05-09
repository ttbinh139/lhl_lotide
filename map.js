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

const assertArraysEqual = function(actual, expected) {
  if (eqArrays(actual, expected) === true) {
    console.log(`Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`Assertion Fail: ${actual} !== ${expected}`);
  }
};

const words = ["ground", "control", "to", "major", "tom"];

const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};

const results1 = map(words, word => word[0]);
const results2 = map(words, function(word) {
  return word[0];
});
const results3 = map(words, (word) => {
  return word[0];
});

module.exports = map;

/* assertArraysEqual(results1, ["g", "c", "t", "m", "t"]);
assertArraysEqual(results2, ["g", "c", "t", "m", "t"]);
assertArraysEqual(results2, results3);
//console.log(results1); */
