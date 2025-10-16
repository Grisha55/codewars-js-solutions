/**
 * @function diamond
 * @param {number} n
 * @returns {String}
 */

function diamond(n) {
  if (n % 2 === 0 || n <= 0) return null;
  if (n === 1) return '*\n';

  let res = '';

  for (let i = 1; i <= n; i += 2) {
    const spaces = ' '.repeat((n - i) / 2);
    const stars = '*'.repeat(i);
    res += spaces + stars + '\n';
  }

  for (let i = n - 2; i >= 1; i -= 2) {
    const spaces = ' '.repeat((n - i) / 2);
    const stars = '*'.repeat(i);
    res += spaces + stars + '\n';
  }

  return res;
}
