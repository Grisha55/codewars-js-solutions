/**
 * @function countBy
 * @param {number} x
 * @param {number} n
 * @returns {number[]}
 */

function countBy(x, n) {
  let res = [];

  for (let i = 1; i <= n; i++) {
    res.push(i * x);
  }

  return res;
}
