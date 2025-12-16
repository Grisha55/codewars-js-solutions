/**
 * @function first
 * @param {string[]} arr
 * @param {number} n
 * @returns {string[]}
 */

function first(arr, n) {
  if (n === undefined) {
    return arr.slice(0, 1);
  }
  return arr.slice(0, n);
}
