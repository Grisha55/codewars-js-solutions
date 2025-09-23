/**
 * @function addBinary
 * @param {number} a
 * @param {number} b
 * @returns {string}
 */

function addBinary(a, b) {
  let binaryStr = '';
  let sum = a + b;

  if (sum === 0) return '0';

  while (sum > 0) {
    binaryStr = (sum % 2) + binaryStr;
    sum = Math.floor(sum / 2);
  }

  return binaryStr;
}
