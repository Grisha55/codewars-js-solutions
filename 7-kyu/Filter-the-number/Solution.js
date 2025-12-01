/**
 * @function filterString
 * @param {string} value
 * @returns {number}
 */

function filterString(value) {
  return Number(value.replace(/\D/g, ''));
}
