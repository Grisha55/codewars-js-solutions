/**
 * @function findAverage
 * @param {number[]} array
 * @returns {number}
 */

function findAverage(array) {
  if (array.length === 0) return 0;

  let sum = 0;

  for (let num of array) {
    sum += num;
  }

  return sum / array.length;
}