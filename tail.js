const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`Assertion Fail: ${actual} !== ${expected}`);
  }
};

const tail = function(data) {
  let res = [];
  if (data.length > 0 && Array.isArray(data) === true) {
    for (let i = 1; i < data.length; i++) {
      res.push(data[i]);
    }
  }
  return res;
};

const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words); // no need to capture the return value since we are not checking it
assertEqual(words.length, 3); // original array should still have 3 elements!