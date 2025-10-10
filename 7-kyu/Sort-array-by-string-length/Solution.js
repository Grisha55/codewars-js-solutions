/**
 * @function sortByLength
 * @param {string[]} array
 * @returns {string[]}
 */

function sortByLength(array) {
  const res = array.sort((a, b) => a.length - b.length);

  return res;
}
