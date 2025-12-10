/**
 * @function isSquare
 * @param {number} n
 * @returns {boolean}
 */

var isSquare = function (n) {
  const check = Math.round(Math.sqrt(n));
  return n === check * check;
};
