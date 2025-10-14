/**
 * @function stray
 * @param {number[]} numbers
 * @returns {number}
 */

function stray(numbers) {
  let count = {};

  for (const num of numbers) {
    count[num] = (count[num] || 0) + 1;
  }

  for (const key in count) {
    if (count[key] === 1) {
      return Number(key);
    }
  }
  return -1;
}
