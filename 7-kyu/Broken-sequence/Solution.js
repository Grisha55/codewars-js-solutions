function findMissingNumber(sequence){
  if (sequence.length === 0) return 0;
  
  const numArr = sequence.split(' ').map((strNum) => Number(strNum)).sort((a, b) => a - b);
  
  for (const el of numArr) {
    if (Number.isNaN(el)) {
      return 1;
    }
  }
  
  for (let i = 1; i < Math.max(...numArr); i++) {
    if (!numArr.includes(i)) {
      return i;
    }
  }
  
  return 0;
}