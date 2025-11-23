/**
 * @function twoDecimalPlaces
 * @param {number} n
 * @returns {number}
 */

function twoDecimalPlaces(n) {
  const threeDigits = +n.toFixed(2);
  return threeDigits;
}
