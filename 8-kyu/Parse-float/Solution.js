/**
 * @function parseF
 * @param {string} s
 * @returns {number | null}
 */

function parseF(s) {
  if (typeof parseFloat(s) !== 'number' || isNaN(parseFloat(s))) {
    return null;
  }
  return parseFloat(s);
}
