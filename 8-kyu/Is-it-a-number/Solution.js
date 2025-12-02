/**
 * @function isDigit
 * @param {string} s
 * @returns {boolean}
 */

function isDigit(s) {
  return /^\s*-?\d+(\.\d+)?\s*$/.test(s);
}
