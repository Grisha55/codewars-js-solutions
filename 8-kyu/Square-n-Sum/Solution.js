/**
 * @function squareSum
 * @param {number} numbers
 * @returns {number}
 */

function squareSum(numbers) {
  let res = 0;

  for (const number of numbers) {
    res += number ** 2;
  }

  return res;
}
