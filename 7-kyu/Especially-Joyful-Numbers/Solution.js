function numberJoy(n) {
    if (n <= 10) return true;
  
  let sum = 0;
  
  for (const num of String(n)) {
    sum += Number(num);
  }
  
  let strReverse = '';
  for (let i = String(sum).length-1; i >= 0; i--) {
    strReverse += String(sum)[i];
  }
  console.log('n = ', n);
  console.log('sum = ', sum);
  console.log('rev = ', strReverse);
  return sum * Number(strReverse) === n;
}