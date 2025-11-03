/**
 * @function powersOfTwo
 * @param {number} n
 * @returns {number[]}
 */

function powersOfTwo(n) {
  let res = [];

  for (let i = 0; i <= n; i++) {
    res.push(Math.pow(2, i));
  }

  return res;
}
