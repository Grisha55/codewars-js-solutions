/**
 * @function capitalize
 * @param {string} s
 * @returns {string[]}
 */

function capitalize(s) {
  let firstStr = '';
  let secondStr = '';

  for (let i = 0; i < s.length; i++) {
    if (i % 2 === 0) {
      firstStr += s[i].toUpperCase();
      secondStr += s[i];
    } else {
      secondStr += s[i].toUpperCase();
      firstStr += s[i];
    }
  }
  return [firstStr, secondStr];
}
