/**
 * @function gap
 * @param {number} g
 * @param {number} m
 * @param {number} n
 * @returns {number|null}
 */

function gap(g, m, n) {
  const isPrime = (num) => {
    if (num < 2) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) return false;
    }
    return true;
  };

  let previousPrime = null;

  for (let i = m; i <= n; i++) {
    if (isPrime(i)) {
      if (previousPrime !== null && i - previousPrime === g) {
        return [previousPrime, i];
      }
      previousPrime = i;
    }
  }

  return null;
}
