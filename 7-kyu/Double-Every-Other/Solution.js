function doubleEveryOther(a) {
  let res = [];
  for (let i = 0; i < a.length; i++) {
    if (i % 2 !== 0) {
      res.push(a[i] * 2);
    } else {
      res.push(a[i]);
    }
  }
  return res;
}