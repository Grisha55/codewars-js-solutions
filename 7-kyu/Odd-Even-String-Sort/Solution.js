/**
 * @function sortMyString
 * @param {string} S
 * @returns {string}
 */

function sortMyString(S) {
  let oddChars = '';
  let evenChars = '';

  for (let i = 0; i < S.length; i++) {
    if (i % 2 === 0) {
      evenChars += S[i];
    } else {
      oddChars += S[i];
    }
  }
  return evenChars + ' ' + oddChars;
}
