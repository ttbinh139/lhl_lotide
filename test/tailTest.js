/* // Import
const assertEqual = require('../assertEqual');
const tail = require('../tail')

const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words); // no need to capture the return value since we are not checking it
assertEqual(words.length, 3); // original array should still have 3 elements! */

const assert = require('chai').assert;
const tail = require('../tail');

describe("#tail function", () => {
  it("[Yo Yo', 'Lighthouse', Labs'] should return ['Lighthouse', 'Labs']", () => {
    assert.deepEqual(tail(["Yo Yo", "Lighthouse", "Labs"]), ["Lighthouse", "Labs"]);
  });

  it("Array with 1 element should return empty array", function(){
    assert.deepEqual(tail("Binh"), []);
  });

  it("Empty array should return undefined", function() {
    assert.deepEqual(tail([]), undefined);
  });
});