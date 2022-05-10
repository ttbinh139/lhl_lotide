/**
 * Create a function flatten which will take in an array containing elements including nested arrays of elements, and return a "flattened" version of the array. 
 */

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
  }
  return final;
};

module.exports = flatten;


