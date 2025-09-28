/**
 * @function high
 * @param {string} x
 * @returns {string}
 */

function high(x) {
  let maxValue = 0;
  let result = '';
  let xArr = x.split(' ');

  for (const str of xArr) {
    let curValue = 0;
    for (let i = 0; i < str.length; i++) {
      curValue += str.charCodeAt(i) - 96;
    }
    if (maxValue < curValue) {
      maxValue = curValue;
      result = str;
    }
  }

  return result;
}
