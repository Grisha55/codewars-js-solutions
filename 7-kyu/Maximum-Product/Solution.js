/**
 * @function adjacentElementsProduct
 * @param {number[]} array
 * @returns {number}
 */

function adjacentElementsProduct(array) {
  let maxMultiplication = array[0] * array[1];
  for (let i = 1; i < array.length - 1; i++) {
    const multiplication = array[i] * array[i + 1];
    if (multiplication > maxMultiplication) {
      maxMultiplication = multiplication;
    }
  }

  return maxMultiplication;
}
