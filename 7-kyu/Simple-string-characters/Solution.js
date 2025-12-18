/**
 * @function solve
 * @param {string} s
 * @returns {number[]}
 */

function solve(s) {
  let upper = 0;
  let lower = 0;
  let nums = 0;
  let others = 0;

  for (let char of s) {
    if (char >= 'A' && char <= 'Z') {
      upper += 1;
    } else if (char >= 'a' && char <= 'z') {
      lower += 1;
    } else if (char >= '0' && char <= '9') {
      nums += 1;
    } else {
      others += 1;
    }
  }

  return [upper, lower, nums, others];
}
