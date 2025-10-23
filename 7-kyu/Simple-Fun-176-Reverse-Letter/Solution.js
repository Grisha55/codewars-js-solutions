/**
 * @function reverseLetter
 * @param {string} str
 * @returns {string}
 */

function reverseLetter(str) {
  const alphabet = 'abcdefghijklmnopqrstuvwxyz';
  let res = '';

  for (let i = str.length - 1; i >= 0; i--) {
    if (alphabet.includes(str[i])) {
      res += str[i];
    }
  }

  return res;
}
