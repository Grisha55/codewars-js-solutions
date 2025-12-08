/**
 * @function dashatize
 * @param {number} num
 * @returns {string}
 */

function dashatize(num) {
  if (isNaN(num)) return 'NaN';

  let str = Math.abs(num).toString();
  let res = '';

  for (let i = 0; i < str.length; i++) {
    const digit = str[i];
    const isOdd = digit % 2 !== 0;

    if (isOdd) {
      res += '-' + digit + '-';
    } else {
      res += digit;
    }
  }

  res = res.replace(/--+/g, '-');
  res = res.replace(/^-|-$/g, '');

  return res;
}
