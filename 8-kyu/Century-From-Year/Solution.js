/**
 * @function century
 * @param {number} year
 * @returns {number}
 */

function century(year) {
  return year % 100 === 0 ? Math.trunc(year / 100) : Math.trunc(year / 100 + 1);
}
