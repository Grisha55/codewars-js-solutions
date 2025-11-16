/**
 * @function largestPairSum
 * @param {number[]} numbers
 * @returns {number}
 */

function largestPairSum(numbers) {
  const sortedNumbers = [...numbers].sort((a, b) => a - b);
  const length = sortedNumbers.length;

  return sortedNumbers[length - 1] + sortedNumbers[length - 2];
}
