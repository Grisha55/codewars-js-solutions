/**
 * @function toNumberArray
 * @param {string[]} stringarray
 * @returns {number[]}
 */

function toNumberArray(stringarray) {
  return stringarray.map((str) => Number(str));
}
