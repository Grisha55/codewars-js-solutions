/**
 * @function calc
 * @param {string} x
 * @returns {number}
 */

function calc(x) {
  let total1 = '';
  for (let i = 0; i < x.length; i++) {
    total1 += x.charCodeAt(i);
  }

  let total2 = '';
  for (let j = 0; j < total1.length; j++) {
    if (total1[j] === '7') {
      total2 += '1';
    } else {
      total2 += total1[j];
    }
  }

  const sum1 = total1
    .split('')
    .reduce((acc, curr) => acc + parseInt(curr, 10), 0);
  const sum2 = total2
    .split('')
    .reduce((acc, curr) => acc + parseInt(curr, 10), 0);

  return sum1 - sum2;
}
