function orderFood(list) {
  let res = {};
  
  for (const obj of list) {
    res[obj.meal] = (res[obj.meal] || 0) + 1;
  }
  
  return res;
}