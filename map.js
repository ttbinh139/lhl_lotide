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
