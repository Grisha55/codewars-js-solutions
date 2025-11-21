/**
 * @function lowercaseCount
 * @param {string} str
 * @returns {number}
 */

function lowercaseCount(str) {
  return (str.match(/[a-z]/g) || []).length;
}
