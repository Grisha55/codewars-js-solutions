function sumNoDuplicates(numList) {
  let count = {};
  
  for (const num of numList) {
    count[num] = (count[num] || 0) + 1;
  }
  
  let sum = 0;
  for (num in count) {
    if (count[num] === 1) {
      sum += +num;
    }
  }
  
  return sum;
}