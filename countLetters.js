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
module.exports = countLetters;