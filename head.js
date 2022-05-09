const head = function(data) {
  let head;
  if (data.length > 0 && Array.isArray(data) === true) {
    head = data[0];
  }

  return head;
};

module.exports = head;
