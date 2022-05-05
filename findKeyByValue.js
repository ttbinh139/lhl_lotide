const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`Assertion Fail: ${actual} !== ${expected}`);
  }
};

const findKeyByValue = function(obj, value) {
  const objKeys = Object.keys(obj);
  if (objKeys.length === 0) {
    return undefined;
  }
  for (let i = 0; i < objKeys.length; i++) {
    if (obj[objKeys[i]] === value) {
      return objKeys[i];
    }
  }
  return undefined;
};

const bestTVShowsByGenre = { 
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama: "The Wire"
};

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);
