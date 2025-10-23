/**
 * @function expressionMatter
 * @param {number} a
 * @param {number} b
 * @param {number} c
 * @returns {number}
 */

function expressionMatter(a, b, c) {
  const one = a * (b + c);
  const two = (a + b) * c;
  const three = a + b + c;
  const four = a + b * c;
  const five = a * b * c;
  return Math.max(one, two, three, four, five);
}
