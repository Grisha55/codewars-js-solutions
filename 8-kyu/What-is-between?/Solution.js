/**
 * @function between
 * @param {number} a
 * @param {number} b
 * @returns {number[]}
 */

function between(a, b) {
  let res = [];

  for (let i = a; i <= b; i++) {
    res.push(i);
  }

  return res;
}
