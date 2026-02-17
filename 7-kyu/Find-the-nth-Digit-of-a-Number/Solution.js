function findDigit(num, nth) {
  if (nth <= 0) return -1;
  if (nth > String(Math.abs(num)).length) return 0;
  
  const strNum = String(Math.abs(num));
  const numArr = strNum.split('').reverse();
  const res = +numArr[nth - 1];
  return res;
}