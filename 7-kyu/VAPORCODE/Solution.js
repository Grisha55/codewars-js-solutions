/**
 * @function vaporcode
 * @param {string} string
 * @returns {string}
 */

function vaporcode(string) {
  let res = '';

  for (let i = 0; i < string.length; i++) {
    if (string[i] !== ' ') {
      res += string[i].toUpperCase() + '  ';
    } else {
      res += '';
    }
  }

  return res.trim();
}
