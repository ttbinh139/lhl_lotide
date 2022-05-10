const countOnly = function(allItems, itemsToCount) {
  const result = {};

  for (const item in itemsToCount) {
    if (itemsToCount[item] === true) {
      let count = 0;
      for (let i = 0; i < allItems.length; i++) {
        if (allItems[i] === item) {
          count += 1;
        }
      }
      if (count > 0) {
        result[item] = count;
      }
    }
  }
  return result;
};

module.exports = countOnly;
