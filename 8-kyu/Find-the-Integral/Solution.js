/**
 * @function integrate
 * @param {number} coefficient
 * @param {number} exponent
 * @returns {string}
*/

function integrate(coefficient, exponent) {
  const integral = coefficient / (exponent + 1);
  return String(integral) + "x^" + String(exponent + 1);
}