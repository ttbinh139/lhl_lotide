const assert = require('chai').assert;
const eqArrays = require('../eqArrays');

describe("#eqArray", function() {
  it("[1, 2, 3] vs [1, 2, 3] shoule return true", function() {
    assert.isTrue(eqArrays([1, 2, 3], [1, 2, 3]));
  });
  it("[] vs [] should return true", function() {
    assert.isTrue(eqArrays([], []));
  });
  it("['a'] vs ['a'] should return true", function() {
    assert.isTrue(eqArrays(['a'], ['a']));
  });
  it("[] vs [1] should return false", function() {
    assert.isFalse(eqArrays([], [1]));
  });
  it("[1] vs [1, 2] should return false", function() {
    assert.isFalse(eqArrays([1], [1, 2]));
  });
  it("[1] vs ['1'] should return false", function() {
    assert.isFalse(eqArrays([1], ['1']));
  })
});