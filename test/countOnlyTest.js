const assert = require('chai').assert;
const countOnly = require('../countOnly');

describe("#countOnly", function() {
  it("Return for Jason should be 1", function() {
    const firstNames = [
      "Karl",
      "Salima",
      "Agouhanna",
      "Fang",
      "Kavith",
      "Jason",
      "Salima",
      "Fang",
      "Joe"
    ];

    result = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });
    assert.equal(result["Jason"], 1);
  });

  it("Return for Karima should be undefined", function() {
    const firstNames = [
      "Karl",
      "Salima",
      "Agouhanna",
      "Fang",
      "Kavith",
      "Jason",
      "Salima",
      "Fang",
      "Joe"
    ];

    result = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });
    assert.equal(result["Karima"], undefined);
  });

  it("Return for Fang should be 2", function() {
    const firstNames = [
      "Karl",
      "Salima",
      "Agouhanna",
      "Fang",
      "Kavith",
      "Jason",
      "Salima",
      "Fang",
      "Joe"
    ];

    result = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });
    assert.equal(result["Fang"], 2);
  });

  it("Return for all false should be empty", function() {
    const firstNames = [
      "Karl",
      "Salima",
      "Agouhanna",
      "Fang",
      "Kavith",
      "Jason",
      "Salima",
      "Fang",
      "Joe"
    ];

    result = countOnly(firstNames, { "Jason": false, "Karima": false, "Fang": false, "Agouhanna": false });
    assert.isEmpty(result);
  });

  it("Return empty if not found", function() {
    const firstNames = [
      "Karl",
      "Salima",
      "Agouhanna",
      "Fang",
      "Kavith",
      "Jason",
      "Salima",
      "Fang",
      "Joe"
    ];

    result = countOnly(firstNames, { "Jason1": true, "Karima1": false, "Fang1": false, "Agouhanna1": true });
    assert.isEmpty(result);
  });
});