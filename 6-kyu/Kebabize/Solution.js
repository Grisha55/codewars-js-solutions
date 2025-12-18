/**
 * @function kebabize
 * @param {string} str
 * @returns {string}
 */

function kebabize(str) {
  const nums = '0123456789';

  for (let char of nums) {
    str = str.replaceAll(char, '');
  }

  let result = '';
  for (let i = 0; i < str.length; i++) {
    if (str[i] === str[i].toUpperCase() && str[i] !== '-') {
      if (i > 0) result += '-';
      result += str[i].toLowerCase();
    } else {
      result += str[i];
    }
  }
  return result;
}
