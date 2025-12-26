/**
 * @function incrementer
 * @param {number[]} nums
 * @returns {number[]}
 */

function incrementer(nums) {
  return nums.map((num, index) => {
    return (num + index + 1) % 10;
  });
}
