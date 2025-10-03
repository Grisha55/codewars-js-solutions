/**
 * @function basicOp
 * @param {string} operation
 * @param {number} value1
 * @param {number} value2
 * @returns {number}
 */

function basicOp(operation, value1, value2) {
  switch (operation) {
    case '+':
      return value1 + value2;
      break;
    case '*':
      return value1 * value2;
      break;
    case '/':
      return value1 / value2;
      break;
    case '-':
      return value1 - value2;
      break;
    default:
      return -1;
      break;
  }
}
