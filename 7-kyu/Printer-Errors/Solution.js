/**
 * @function printerError
 * @param {string} s
 * @returns {string}
 */

function printerError(s) {
  const errors = s.match(/[^a-m]/g) || [];
  return `${errors.length}/${s.length}`;
}