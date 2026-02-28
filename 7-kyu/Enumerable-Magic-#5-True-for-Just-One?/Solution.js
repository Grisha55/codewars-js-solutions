function one(arr, fun){
  let count = 0;
  for (const item of arr) {
    if (fun(item)) {
      count++;
    }
  }
  return count === 1;
}