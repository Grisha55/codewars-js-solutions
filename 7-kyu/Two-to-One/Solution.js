/**
 * @function longest
 * @param {string} s1
 * @param {string} s2
 * @returns {string}
 */

function longest(s1, s2) {
  let finalArr = [];

  for (const char of s1) {
    if (!finalArr.includes(char)) {
      finalArr.push(char);
    }
  }

  for (const char of s2) {
    if (!finalArr.includes(char)) {
      finalArr.push(char);
    }
  }

  return finalArr.sort().join('');
}