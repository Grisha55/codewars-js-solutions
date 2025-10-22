/**
 * @function twoSum
 * @param {number[]} numbers
 * @param {number} target
 * @returns {number[]}
 */

function twoSum(numbers, target) {
  for (let i = 0; i < numbers.length; i++) {
    for (let j = 0; j < numbers.length; j++) {
      if (numbers[i] + numbers[j] === target && i !== j) {
        return [i, j];
      }
    }
  }
  return [0, 1];
}
