/* const assertArraysEqual = require('../assertArraysEqual');
//const assertEqual = require('../assertEqual');
//const eqArrays = require('../eqArrays');
const middle = require('../middle')

assertArraysEqual(middle([1]), []);
assertArraysEqual(middle([1, 2]), []);
assertArraysEqual(middle([1, 2, 3]), [2]);
assertArraysEqual(middle([1, 2, 3, 4 , 5]), [3]);
assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]);
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]); */

const assert = require('chai').assert;
const middle = require('../middle')

describe("#middle Test", function() {
  it("Array with 1 element should return empty array", function() {
    assert.deepEqual(middle([1]), []);
  });

  it("Array with 2 elements should return empty array", function() {
    assert.deepEqual(middle([1, 2]), []);
  });

  it("Array [1, 2, 3] should return [2]", function() {
    assert.deepEqual(middle([1, 2, 3]), [2]);
  });

  it("Array [1, 2, 3, 4] should return [2, 3]", function() {
    assert.deepEqual(middle([1, 2, 3, 4]), [2, 3]);
  });

});