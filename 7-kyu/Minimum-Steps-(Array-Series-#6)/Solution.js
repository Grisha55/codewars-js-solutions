function minimumSteps(numbers, value){
  const sortedNums = numbers.sort((a, b) => a - b);
  let curSum = 0;
  let steps = 0;
  
  for (const num of sortedNums) {
    curSum += num;
    if (curSum >= value) {
      return steps;
    }
    steps++;
  }
  
  return steps;
}