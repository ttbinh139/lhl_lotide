/**
 * Create a function flatten which will take in an array containing elements including nested arrays of elements, and return a "flattened" version of the array. 
 */


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

const flatten = function(data) {
  let final = [];
  if(Array.isArray(data)) {
    for (let i = 0; i < data.length; i++) {
      if(Array.isArray(data[i])) {
        for (let j = 0; j < data[i].length; j++) {
          final.push(data[i][j]);
        }
      } else {
        final.push(data[i]);
      }
    }
  } else {
    console.log("Input is not an array");
    process.exit();
  }
  return final;
};

//console.log(flatten([1, 2, [3, 4], 5, [6]]));
assertArraysEqual(flatten([1, 2, [3, 4], 5, [6]]), [1, 2, 3 ,4 ,5 ,6]);
//console.log(flatten("test"));
