function uniqueSum(lst){
  if (lst.length === 0) return null;
  
  let uniqueNums = new Set();
  let sum = 0;
  
  for (const num of lst) {
    if (!uniqueNums.has(num)) {
      uniqueNums.add(num);
      sum += num;
    }
  }
  
  return sum;
}