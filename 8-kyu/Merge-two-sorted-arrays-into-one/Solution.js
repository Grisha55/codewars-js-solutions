/**
 * @function mergeArrays
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @returns {number[]}
 */

function mergeArrays(arr1, arr2) {
  let res = arr1.concat(arr2).sort((a, b) => a - b);
  return [...new Set(res)];
}
