function maxGap (numbers){
  const sortedNumbers = numbers.sort((a, b) => a - b);
  let maxGap = 0;
  
  for (let i = 1; i < sortedNumbers.length; i++) {
    maxGap = Math.max(maxGap, sortedNumbers[i] - sortedNumbers[i - 1]);
  }
  
  return maxGap;
}