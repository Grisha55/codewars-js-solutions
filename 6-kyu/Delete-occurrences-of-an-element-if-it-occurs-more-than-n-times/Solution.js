/**
 * @function deleteNth
 * @param {number[]} arr
 * @param {number} n
 * @returns {number[]}
 */

function deleteNth(arr, n) {
  let res = [];
  let count = {};

  for (const num of arr) {
    const c = count[num] ?? 0;
    if (c < n) {
      res.push(num);
      count[num] = (count[num] || 0) + 1;
    }
  }

  return res;
}
