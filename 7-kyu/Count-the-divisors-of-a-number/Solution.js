/**
 * @function getDivisorsCnt
 * @param {number} n
 * @returns {number}
 */

function getDivisorsCnt(n) {
  if (n <= 0) return 0;
  if (n === 1) return 1;

  let res = 1;
  let cnt = 0;

  while (n % 2 === 0) {
    n = n / 2;
    cnt++;
  }
  if (cnt > 0) result *= cnt + 1;

  let p = 3;
  while (p * p <= n) {
    cnt = 0;
    while (n % p === 0) {
      n = n / p;
      cnt++;
    }
    if (cnt > 0) res *= cnt + 1;
    p += 2;
  }

  if (n > 1) result *= 2;

  return res;
}
