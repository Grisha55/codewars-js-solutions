/**
 * @function stairsIn20
 * @param {string[]} s
 * @returns {number}
 */

function stairsIn20(s) {
  let total = 0;
  for (const row of s) {
    for (const stair of row) {
      total += parseInt(stair);
    }
  }
  return total * 20;
}
