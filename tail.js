const tail = function(data) {
  if(data.length === 0) {
    return undefined;
  }
  let res = [];
  if (data.length > 0 && Array.isArray(data) === true) {
    for (let i = 1; i < data.length; i++) {
      res.push(data[i]);
    }
  }
  return res;
};

module.exports = tail;