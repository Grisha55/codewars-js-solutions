/**
 * @function lastDigit
 * @param {number} n
 * @param {number} m
 * @returns {number}
*/

function lastDigit(n, m) {
  const bigN = BigInt(n);
  const bigM = BigInt(m);

  if (m === 0n) return 1n;
  if (n === 0n) return 0n;


  const lastDigitOfN = bigN % 10n;
  const modM = bigM % 4n;
  const effectivePower = modM === 0n ? 4n : modM;

  const result = (lastDigitOfN ** effectivePower) % 10n;
  return result === 0n ? 0n : result;
}
