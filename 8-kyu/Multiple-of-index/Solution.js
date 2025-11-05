/**
 * @function multipleOfIndex
 * @param {number[]} array
 * @returns {number[]}
 */

function multipleOfIndex(array) {
  return array.filter((num, idx) => (idx === 0 ? num === 0 : num % idx === 0));
}
