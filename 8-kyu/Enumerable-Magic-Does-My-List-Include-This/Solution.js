/**
 * @function include
 * @param {number[]} arr
 * @param {number} item
 * @returns {boolean}
 */

function include(arr, item) {
  let exists = false;

  for (const num of arr) {
    if (item === num) {
      exists = true;
    }
  }

  return exists;
}
