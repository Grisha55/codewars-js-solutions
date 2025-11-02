/**
 * @function smallEnough
 * @param {number[]} a
 * @param {number} limit
 * @returns {boolean}
 */

function smallEnough(a, limit) {
  for (const num of a) {
    if (num <= limit) {
      continue;
    } else {
      return false;
    }
  }
  return true;
}
