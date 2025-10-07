/**
 * @function findUniq
 * @param {number[]} arr
 * @returns {number}
 */

function findUniq(arr) {
  let count = {};

  for (const num of arr) {
    count[num] = (count[num] || 0) + 1;
  }

  for (const key in count) {
    if (count[key] === 1) {
      return Number(key);
    }
  }

  return -1;
}
