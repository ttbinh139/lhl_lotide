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

const middle = function(array) {
  let mid = [];

  if(array.length === 1 || array.length === 2) {
    return [];
  }

  let length = array.length;
  let midIndex = Math.floor(length / 2);
  if (length % 2 !== 0) {
    mid.push(array[midIndex]);
  } else {
    mid.push(array[midIndex - 1]);
    mid.push(array[midIndex]);
  }
  return mid;
}
assertArraysEqual(middle([1]), []);
assertArraysEqual(middle([1, 2]), []);
assertArraysEqual(middle([1, 2, 3]), [2]);
assertArraysEqual(middle([1, 2, 3, 4 , 5]), [3]);
assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]);
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);

