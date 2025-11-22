/**
 * @function toCsvText
 * @param {number[[]]} array
 * @returns {string}
 */

function toCsvText(array) {
  let str = '';

  for (let i = 0; i < array.length; i++) {
    str += array[i].join(',');
    str += '\n';
  }

  const res = str.slice(0, str.length - 1);
  return res;
}
