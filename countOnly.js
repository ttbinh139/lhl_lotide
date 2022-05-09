const { count } = require("console");

const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`Assertion Fail: ${actual} !== ${expected}`);
  }
};

const countOnly = function(allItems, itemsToCount) {
  const result = {};

  for (const item in itemsToCount) {
    if (itemsToCount[item] === true) {
      let count = 0;
      for (let i = 0; i < allItems.length; i++) {
        if (allItems[i] === item) {
          count += 1;
        }
      }
      if (count > 0) {
        result[item] = count;
      }
    }
  }
  return result;
};

module.exports = countOnly;

/* const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];

const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });
console.log(result1);
assertEqual(result1["Jason"], 1); */
//assertEqual(result1["Karima"], undefined);
//assertEqual(result1["Fang"], 2);
//assertEqual(result1["Agouhanna"], undefined);
