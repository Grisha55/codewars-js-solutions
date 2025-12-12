/**
 * @function min
 * @param {number[]} arr
 * @param {string} toReturn
 * @returns {number}
 */

function min(arr, toReturn) {
  let smallestIdx = 0;

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < arr[smallestIdx]) {
      smallestIdx = i;
    }
  }
  return toReturn === 'value' ? arr[smallestIdx] : smallestIdx;
}
