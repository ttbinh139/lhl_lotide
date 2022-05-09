const tail = function(data) {
  let res = [];
  if (data.length > 0 && Array.isArray(data) === true) {
    for (let i = 1; i < data.length; i++) {
      res.push(data[i]);
    }
  }
  return res;
};

module.exports = tail;