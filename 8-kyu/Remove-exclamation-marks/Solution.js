/**
 * @function removeExclamationMarks
 * @param {string} s
 * @returns {string}
 */

function removeExclamationMarks(s) {
  let str = '';

  for (char of s) {
    if (char !== '!') {
      str += char;
    }
  }
  return str;
}
