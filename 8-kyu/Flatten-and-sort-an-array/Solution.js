/**
 * @function flattenAndSort
 * @param {number[[]]} array
 * @returns {number[]}
 */

function flattenAndSort(array) {
  let res = [];

  for (let i = 0; i < array.length; i++) {
    if (array[i].length > 0) {
      for (let j = 0; j < array[i].length; j++) {
        res.push(array[i][j]);
      }
    }
  }

  return res.sort((a, b) => a - b);
}
