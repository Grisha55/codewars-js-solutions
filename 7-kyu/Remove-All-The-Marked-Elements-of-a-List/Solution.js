Array.prototype.remove_ = function (integer_list, values_list) {
  let res = [];
  for (const num of integer_list) {
    if (!values_list.includes(num)) {
      res.push(num);
    }
  }
  return res;
};
