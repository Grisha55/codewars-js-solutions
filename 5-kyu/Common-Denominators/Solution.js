/**
 * @function convertFrac
 * @param {number[[]]} lst
 * @returns {string}
 */

function convertFrac(lst) {
  if (lst.length === 0) return '';

  const gcd = (a, b) => (b === 0 ? a : gcd(b, a % b));

  const lcm = (a, b) => (a * b) / gcd(a, b);

  let commonDenom = lst[0][1];

  for (let i = 1; i < lst.length; i++) {
    commonDenom = lcm(commonDenom, lst[i][1]);
  }

  const result = lst
    .map(([num, denom]) => `(${(num * commonDenom) / denom},${commonDenom})`)
    .join('');

  return result;
}
