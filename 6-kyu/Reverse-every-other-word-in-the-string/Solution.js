/**
 * @function reverse
 * @param {string} str
 * @returns {string}
 */

function reverse(str) {
  let words = [];
  let current = '';

  for (let i = 0; i < str.length; i++) {
    if (str[i] !== ' ') {
      current += str[i];
    } else if (current.length > 0) {
      words.push(current);
      current = '';
    }
  }

  if (current.length > 0) {
    words.push(current);
  }

  if (words.length === 0) return '';

  for (let i = 1; i < words.length; i += 2) {
    let reversed = '';
    for (let j = words[i].length - 1; j >= 0; j--) {
      reversed += words[i][j];
    }
    words[i] = reversed;
  }

  let result = '';
  for (let i = 0; i < words.length; i++) {
    result += words[i];
    if (i !== words.length - 1) {
      result += ' ';
    }
  }

  return result;
}
