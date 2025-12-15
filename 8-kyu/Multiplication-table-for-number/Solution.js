/**
 * @function multipleTable
 * @param {number} number
 * @returns {string}
 */

function multiTable(number) {
  let res = '';

  for (let i = 1; i <= 10; i++) {
    res += `${i} * ${number} = ${i * number}`;
    if (i < 10) {
      res += '\n';
    }
  }

  return res;
}
