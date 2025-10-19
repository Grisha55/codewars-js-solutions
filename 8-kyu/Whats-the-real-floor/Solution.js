/**
 * @function getRealFloor
 * @param {number} n
 * @returns {number}
 */

function getRealFloor(n) {
  if (n >= 1 && n < 13) return n - 1;
  if (n <= 0) return n;
  if (n > 13) return n - 2;
  return n;
}
