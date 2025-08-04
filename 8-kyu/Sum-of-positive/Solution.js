/**
 * @function positiveSum
 * @param {number[]} arr
 * @returns {number}
 */

function positiveSum(arr) {
  if (arr.length === 0) return 0;

  let sum = 0;

  for (num of arr) {
    if (num >= 0) {
      sum += num;
    }
  }

  return sum;
}