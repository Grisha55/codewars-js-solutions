/**
 * @function sumOfDifferences
 * @param {number[]} arr
 * @returns {number}
 */

function sumOfDifferences(arr) {
  if (arr.length === 0 || arr.length === 1) return 0;

  const sortedArr = [...arr].sort((a, b) => b - a);
  let sum = 0;

  for (let i = 1; i < sortedArr.length; i++) {
    sum += sortedArr[i - 1] - sortedArr[i];
  }

  return sum;
}
