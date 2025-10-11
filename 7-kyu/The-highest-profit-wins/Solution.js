/**
 * @function minMax
 * @param {number[]} arr
 * @returns {number[]}
 */

function minMax(arr) {
  let min = arr[0];
  let max = arr[0];

  for (let num of arr) {
    if (min > num) {
      min = num;
    }
    if (max < num) {
      max = num;
    }
  }

  return [min, max];
}
