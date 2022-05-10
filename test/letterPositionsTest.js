const assert = require('chai').assert;
const letterPositions = require('../letterPositions');

/* //console.log(letterPositions("Hello World!"));
console.log(letterPositions("lighthouse")); */

describe("#letterPositions", function() {
  it("hello shoule return {h:[0], e: [1], l: [2,3], o: [4]}", function() {
    const text = "hello";
    const result = letterPositions(text);
    const expected = {h:[0], e: [1], l: [2,3], o: [4]};
    assert.deepEqual(result, expected)
  });

  it("h shoule return {h:[0]}", function() {
    const text = "h";
    const result = letterPositions(text);
    const expected = {h:[0]};
    assert.deepEqual(result, expected)
  });

  it("empty string should return empty object", function() {
    assert.deepEqual(letterPositions(""), {})
  });
});