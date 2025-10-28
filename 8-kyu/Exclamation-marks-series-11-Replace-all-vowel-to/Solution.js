/**
 * @function replace
 * @param {string} s
 * @returns {string}
 */

function replace(s) {
  let res = '';
  const vowels = ['a', 'e', 'i', 'o', 'u'];

  for (const char of s) {
    if (vowels.includes(char.toLowerCase())) {
      res += '!';
    } else {
      res += char;
    }
  }

  return res;
}
