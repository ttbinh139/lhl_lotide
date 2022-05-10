/* //console.log(flatten([1, 2, [3, 4], 5, [6]]));
assertArraysEqual(flatten([1, 2, [3, 4], 5, [6]]), [1, 2, 3 ,4 ,5 ,6]);
//console.log(flatten("test")); */

const assert = require('chai').assert;
const flatten = require('../flatten');

describe("#flatten", function(){
  it("[1, 2, [3, 4], 5, [6]]] should return [1, 2, 3 ,4 ,5 ,6]", function() {
    assert.deepEqual(flatten([1, 2, [3, 4], 5, [6]]),[1, 2, 3 ,4 ,5 ,6] )
  });
});