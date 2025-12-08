/**
 * @function solve
 * @param {number[]} arr
 * @returns {number[]}
 */

function solve(arr) {
  const sortedArr = [];

  for (let i = arr.length - 1; i >= 0; i--) {
    if (!sortedArr.includes(arr[i])) {
      sortedArr.push(arr[i]);
    }
  }

  return sortedArr.reverse();
}
