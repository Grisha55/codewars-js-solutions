/**
 * @function removeChar
 * @param {string} str
 * @returns {string}
 */

function removeChar(str) {
  if (str.length === 2) return '';

  let res = '';

  for (let i = 1; i < str.length - 1; i++) {
    res += str[i];
  }

  return res;
}
