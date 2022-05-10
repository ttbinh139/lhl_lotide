const findKeyByValue = function(obj, value) {
  const objKeys = Object.keys(obj);
  if (objKeys.length === 0) {
    return undefined;
  }
  for (let i = 0; i < objKeys.length; i++) {
    if (obj[objKeys[i]] === value) {
      return objKeys[i];
    }
  }
  return undefined;
};
module.exports = findKeyByValue;
