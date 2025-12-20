/**
 * @function seven
 * @param {number} m
 * @returns {number[]}
 */

function seven(m) {
  let count = 0;
  while (m >= 100) {
    const strM = m.toString();
    const lastDigit = parseInt(strM[strM.length - 1], 10);
    const restOfNumber = parseInt(strM.slice(0, strM.length - 1), 10);
    m = restOfNumber - 2 * lastDigit;
    count += 1;
  }
  return [m, count];
}
