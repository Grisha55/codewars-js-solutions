/**
 * @function correct
 * @param {string} string
 * @returns {string}
 */

function correct(string) {
  const correction = {
    5: 'S',
    0: 'O',
    1: 'I',
  };

  let res = '';

  for (const char of string) {
    if (correction[char]) {
      res += correction[char];
    } else {
      res += char;
    }
  }

  return res;
}
