/**
 * @function disemvowel
 * @param {string} str
 * @returns {string}
 */

function disemvowel(str) {
  const vowels = 'aeiouAEIOU';
  let res = '';

  for (const char of str) {
    if (!vowels.includes(char)) {
      res += char;
    }
  }

  return res;
}
