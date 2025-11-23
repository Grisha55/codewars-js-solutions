/**
 * @function shortenToDate
 * @param {string} longDate
 * @returns {string}
 */

function shortenToDate(longDate) {
  const strArr = longDate.split(',');
  return strArr[0];
}
