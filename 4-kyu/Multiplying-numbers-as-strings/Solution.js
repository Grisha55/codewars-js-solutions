/**
 * @function multiply
 * @param {string} a
 * @param {string} b
 * @returns {string}
 */

function multiply(a, b) {
  if (a === '0' || b === '0') return '0';

  const arrA = a.split('').reverse().map(Number);
  const arrB = b.split('').reverse().map(Number);
  const result = Array(arrA.length + arrB.length).fill(0);

  for (let i = 0; i < arrA.length; i++) {
    for (let j = 0; j < arrB.length; j++) {
      result[i + j] += arrA[i] * arrB[j];
      if (result[i + j] >= 10) {
        result[i + j + 1] += Math.floor(result[i + j] / 10);
        result[i + j] %= 10;
      }
    }
  }

  while (result[result.length - 1] === 0) {
    result.pop();
  }

  return result.reverse().join('');
}
