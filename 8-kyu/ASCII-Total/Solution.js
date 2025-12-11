/**
 * @function uniTotal
 * @param {string} string
 * @returns {number}
 */

function uniTotal(string) {
  return [...string].reduce((acc, char) => acc + char.charCodeAt(0), 0);
}
