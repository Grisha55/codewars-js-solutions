/**
 * @function solution
 * @param {number[]} nums
 * @returns {number[]}
 */

function solution(nums) {
  if (nums === null || nums.length === 0) return [];
  let changed = true;
  let res = nums;

  while (changed) {
    changed = false;
    for (let i = 1; i < res.length; i++) {
      if (res[i - 1] > res[i]) {
        const num = res[i];
        res[i] = res[i - 1];
        res[i - 1] = num;
        changed = true;
      }
    }
  }

  return res;
}
