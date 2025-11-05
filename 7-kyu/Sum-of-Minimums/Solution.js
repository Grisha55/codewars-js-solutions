/**
 * @function sumOfMinimums
 * @param {number[[]]} arr
 */

function sumOfMinimums(arr) {
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    sum += findMinimum(arr[i]);
  }

  return sum;
}

/**
 * @function findMinimum
 * @param {number[]} arr
 * @returns {number}
 */
function findMinimum(arr) {
  let min = arr[0];

  for (let i = 0; i < arr.length; i++) {
    if (min > arr[i]) {
      min = arr[i];
    }
  }

  return min;
}
