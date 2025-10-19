/**
 * @function doubleChar
 * @param {string} str
 * @returns {string}
 */

function doubleChar(str) {
  let res = '';

  for (let i = 0; i < str.length; i++) {
    res += str[i] + str[i];
  }

  return res;
}
