/**
 * @function take
 * @param {number[]} arr
 * @param {number} n
 * @returns {number[]}
 */

function take(arr, n) {
  if (arr.length === 0) return [];

  let res = [];
  let count = n > arr.length ? arr.length : n;

  for (let i = 0; i < count; i++) {
    res.push(arr[i]);
  }

  return res;
}
