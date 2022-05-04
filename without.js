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

// Check item is not existed in array
const checkNotExisted = function(item, array) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === item) {
      return false;
    }
  }
  return true;
};

const without = function(source, itemsToRemove) {
  let result = [];
  for (let i = 0; i < source.length; i++) {
    /*if (checkNotExisted(source[i], itemsToRemove)) {
      result.push(source[i]);
    }*/
    if (itemsToRemove.includes(source[i]) === false) {
      result.push(source[i]);
    }
  }
  return result;
};

// Define a result = [];
// For loop -> insde the for loop check if each element is not existed in array itemsToRemove then push that element to result array
// Return result

const words = ["hello", "world", "lighthouse"];
const result = without(words, ["world", "hello"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);
console.log(result);
