/**
 * @function isTriangle
 * @param {number} a
 * @param {number} b
 * @param {number} c
 * @returns {boolean}
 */

function isTriangle(a, b, c) {
  if (a <= 0 || b <= 0 || c <= 0) {
    return false;
  } else if (a + b > c && a + c > b && b + c > a) {
    return true;
  }
  return false;
}