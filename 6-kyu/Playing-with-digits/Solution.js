/**
 @function digPow
 @param {number} n
 @param {number} p
 @returns {number}
*/

function digPow(n, p){
  const str = String(n);
  let sum = 0;
  
  for (let i = 0; i < str.length; i++) {
    const digit = Number(str[i]);
    sum += (digit ** (p + i));
  }
  
  if (sum % n === 0) {
    return sum / n;
  } else {
    return -1;
  }
}