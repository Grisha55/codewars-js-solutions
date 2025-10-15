/**
 * @function strCount
 * @param {string} str
 * @param {string} letter
 * @returns {number}
 */

function strCount(str, letter) {
  return str.split(letter).length - 1;
}
