/**
 * @function rowWeights
 * @param {number[]} array
 * @returns {number[]}
 */

function rowWeights(array) {
  let firstSum = 0;
  let secondSum = 0;

  for (let i = 0; i < array.length; i++) {
    if (i % 2 === 0) {
      firstSum += array[i];
    } else {
      secondSum += array[i];
    }
  }

  return [firstSum, secondSum];
}
