/**
 * @function minSum
 * @param {number} arr
 * @returns {number}
 */

function minSum(arr) {
  const sortedArr = [...arr].sort((a, b) => a - b);
  let sum = 0;
  const len = sortedArr.length;

  for (let i = 0; i < len / 2; i++) {
    sum += sortedArr[i] * sortedArr[len - 1 - i];
  }

  return sum;
}
