/**
 * @function findAverage
 * @param {number[]} nums
 * @returns {number}
 */

function findAverage(nums) {
  const sum = nums.reduce((sum, num) => sum + num);
  const numsLength = nums.length;
  return sum / numsLength;
}
