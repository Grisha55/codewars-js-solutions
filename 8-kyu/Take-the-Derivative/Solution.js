/**
 * @function derive
 * @param {number} coefficient
 * @param {number} exponent
 * @returns {string}
*/

function derive(coefficient,exponent) {
  const multiplyResult = coefficient * exponent;
  const result = String(multiplyResult) + "x^" + String(exponent - 1);
  
  return result;
}