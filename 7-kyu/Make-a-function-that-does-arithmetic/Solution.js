/**
 * @function arithmetic
 * @param {number} a
 * @param {number} b
 * @param {string} operator
 * @returns {number}
 */

function arithmetic(a, b, operator) {
  switch (operator) {
    case 'add':
      return a + b;
      break;
    case 'subtract':
      return a - b;
      break;
    case 'multiply':
      return a * b;
      break;
    case 'divide':
      return a / b;
  }

  return -1;
}
