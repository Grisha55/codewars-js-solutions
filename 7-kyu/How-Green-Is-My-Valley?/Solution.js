function makeValley(arr) {
  const sortedArr = [...arr].sort((a, b) => b - a);
  const left = [];
  const right = [];
  
  for (let i = 0; i < sortedArr.length; i++) {
    if (i % 2 === 0) {
      left.push(sortedArr[i]);
    } else {
      right.push(sortedArr[i]);
    }
  }
  
  right.sort((a, b) => a - b);
  
  return [...left, ...right];
}