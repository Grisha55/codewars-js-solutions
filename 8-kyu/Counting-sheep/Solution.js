/**
 * @function countSheeps
 * @param {boolean[]} sheep
 * @returns {number}
 */

function countSheeps(sheep) {
  let count = 0;
  
  for (const state of sheep) {
    if (state) {
      count++;
    }
  }

  return count;
}