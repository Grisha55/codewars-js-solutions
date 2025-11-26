/**
 * @function multiply
 * @param {number} number
 * @returns {number}
 */

function multiply(number) {
  return number * 5 ** Math.abs(number).toString().length;
}
