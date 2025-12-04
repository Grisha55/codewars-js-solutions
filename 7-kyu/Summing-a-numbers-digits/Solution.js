/**
 * @function sumDigits
 * @param {number} number
 * @returns {number}
 */

function sumDigits(number) {
  return Math.abs(number)
    .toString()
    .split('')
    .reduce((sum, digit) => sum + Number(digit), 0);
}
