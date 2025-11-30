/**
 * @function isPowerOfTwo
 * @param {number} n
 * @returns {boolean}
 */

function isPowerOfTwo(n) {
  if (n < 1) return false;
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (2 ** i === n) {
      return true;
    }
  }

  return false;
}
