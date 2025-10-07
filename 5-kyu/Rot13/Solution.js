/**
 * @function rot13
 * @param {string} str
 * @returns {string}
 */

function rot13(str) {
  let res = '';

  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    const code = char.charCodeAt(0);

    if (code >= 65 && code <= 90) {
      const newCode = ((code - 65 + 13) % 26) + 65;
      res += String.fromCharCode(newCode);
    } else if (code >= 97 && code <= 122) {
      const newCode = ((code - 97 + 13) % 26) + 97;
      res += String.fromCharCode(newCode);
    } else {
      res += char;
    }
  }

  return res;
}
