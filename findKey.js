const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`Assertion Fail: ${actual} !== ${expected}`);
  }
};

const findKey = function(object, callback) {
  let result = undefined;
  for (const element in object) {
    if (callback(object[element]) === true) {
      result = element;
      return result;
    }
  }
  return result;
};

module.exports = findKey;

/* const object = {
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
};

const res = findKey(object, x => x.stars === 3); // => "noma"
assertEqual(res, "Akaleri");
//console.log("Result ", res); */
