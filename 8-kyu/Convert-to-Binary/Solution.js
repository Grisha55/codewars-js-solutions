/**
 * @function toBinary
 * @param {number} n
 * @returns {number}
 */

function toBinary(n) {
  let res = '';
  let num = n;

  while (num > 0) {
    const end = num % 2;
    res = end + res;
    num = Math.floor(num / 2);
  }

  return Number(res);
}
