/**
 * @function digitize
 * @param {number} n
 * @returns {number[]}
 */

function digitize(n) {
  const strN = String(n).split("");
  let nums = [];

  for (const char of strN) {
    nums.push(Number(char));
  }

  return nums.reverse();
}
