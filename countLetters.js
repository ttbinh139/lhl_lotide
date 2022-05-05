const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`Assertion Fail: ${actual} !== ${expected}`);
  }
};

const countLetters = function(string) {
  let result = {};

  for (let i = 0; i < string.length; i++) {
    if (result[string[i]]) {
      result[string[i]] += 1;
    } else if (string[i] !== " ") {
      result[string[i]] = 1;
    }
  }
  return result;
};

console.log(countLetters("Light house labs"));