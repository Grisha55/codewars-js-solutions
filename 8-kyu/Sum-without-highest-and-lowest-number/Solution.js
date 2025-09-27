/**
 * @function sumArray
 * @param {number[]} array
 * @returns {number}
 */

function sumArray(array) {
  if (!Array.isArray(array) || array === null) return 0;

  if (!array.every((item) => typeof item === 'number' && !isNaN(item)))
    return 0;

  if (array.length < 2) return 0;

  const min = Math.min(...array);
  const max = Math.max(...array);
  let sum = 0;
  let minFound = false;
  let maxFound = false;

  for (let i = 0; i < array.length; i++) {
    if (!minFound && array[i] === min) {
      minFound = true;
    } else if (!maxFound && array[i] === max) {
      maxFound = true;
    } else {
      sum += array[i];
    }
  }

  return sum;
}
