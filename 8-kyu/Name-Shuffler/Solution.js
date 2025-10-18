/**
 * @function nameShuffler
 * @param {string} str
 * @returns {string}
 */

function nameShuffler(str) {
  const strArr = str.split(' ');
  return strArr[1] + ' ' + strArr[0];
}
