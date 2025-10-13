/**
 * @function sum
 * @param {number[]} numbers
 * @returns {number}
 */

function sum(numbers) {
  if (numbers.length === 0) return 0;
  return numbers.reduce((acc, num) => acc + num);
}
