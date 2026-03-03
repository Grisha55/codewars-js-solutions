function dominator(arr) {
  const count = new Map();
  
  for (const num of arr) {
    count[num] = (count[num] || 0) + 1;
  }
  
  for (key in count) {
    if (count[key] > arr.length / 2) {
      return +key;
    }
  }
  
  return -1;
}
