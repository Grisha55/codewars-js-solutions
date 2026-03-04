function isVeryEvenNumber(n) {
  let sum = getSum(n);
  
  while (sum.toString().length > 1) {
    sum = getSum(sum);
  }
  
  return sum % 2 === 0;
}

function getSum(num) {
  return num
          .toString()
          .split('')
          .map((str) => Number(str))
          .reduce((acc, num) => acc + num, 0);
}