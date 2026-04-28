Array.prototype.filter = function (func) {
  const res = [];
  for (const el of this) {
    if (func(el)) {
      res.push(el);
    }
  }
  
  return res;
}
