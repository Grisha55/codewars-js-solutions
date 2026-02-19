function duplicates(arr) {
  const res = [];
  const seen = new Set();
  const added = new Set();
  
  for (const el of arr) {
    if (seen.has(el) && !added.has(el)) {
      res.push(el);
      added.add(el);
    } else {
      seen.add(el);
    }
  }
  
  return res;
}