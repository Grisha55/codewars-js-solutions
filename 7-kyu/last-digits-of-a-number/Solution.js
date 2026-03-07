function lastDigit(n, d) {
  const numArr = n.toString().split('').map((str) => Number(str));
  
  if (d > numArr.length) return numArr;
  
  return numArr.slice(numArr.length - d);
}