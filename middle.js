const middle = function(array) {
  let mid = [];

  if (array.length === 1 || array.length === 2) {
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
};

module.exports = middle;

