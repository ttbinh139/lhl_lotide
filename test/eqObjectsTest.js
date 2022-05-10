/* const ab = { a: "1", b: "2", c: "5" };
const ba = { a: "1", b: "2", c: "5" };
//console.log(eqObjects(ab, ba)); // => true

const abc = { a: "1", b: "2", d: "3" };
//console.log(eqObjects(ab, abc)); // => false

const cd = { c: true };
const dc = { d: ["2", 3], c: "1" };
//console.log(eqObjects(cd, dc)); // => true

const cd2 = { c: false };
console.log(eqObjects(cd, cd2)); // => false */

const assert = require('chai').assert;
const eqObjects = require('../eqObjects');

describe("#eqObject", function() {
  it("{ a: '1', b: '2', c: '5' } vs { a: '1', b: '2', c: '5' } should return true", function() {
    const ab = { a: "1", b: "2", c: "5" };
    const ba = { a: "1", b: "2", c: "5" };
    assert.isTrue(eqObjects(ab, ba));
  });

  it("{ c: '1', d: ['2', 3] } vs { d: ['2', 3], c: '1' } should return true", function() {
    const cd = { c: '1', d: ['2', 3] };
    const dc = { d: ['2', 3], c: '1' };
    assert.isTrue(eqObjects(cd, dc));
  });

  it("{ a: '1', b: '2', c: '5' } vs { a: '1', b: '2', d: '3' } should return false", function(){
    const ab = { a: '1', b: '2', c: '5' };
    const abc = { a: '1', b: '2', d: '3' };
    assert.isFalse(eqObjects(ab, abc));
  });

  it("{ c: true } vs { c: false } should return false", function() {
    const cd = { c: true };
    const cd2 = { c: false };
    assert.isFalse(eqObjects(cd, cd2));
  })
})