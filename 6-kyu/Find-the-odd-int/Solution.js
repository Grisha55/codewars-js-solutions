/**
 * @function findOdd
 * @param {number[]} A
 * @returns {number}
 */

function findOdd(A) {
  let count = {};

  for (num of A) {
    count[num] = (count[num] || 0) + 1;
  }

  for (key in count) {
    if (count[key] % 2 !== 0) {
      return Number(key);
    }
  }

  return -1;
}
