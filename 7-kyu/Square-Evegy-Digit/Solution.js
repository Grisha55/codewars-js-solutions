/**
 * @function squareDigits
 * @param {number} num
 * @returns {number}
 */

function squareDigits(num) {
  let res = '';

  for (let el of String(num)) {
    res += String(el * el);
  }

  return res;
}
