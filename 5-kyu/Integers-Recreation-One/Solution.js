/**
 * @function listSquared
 * @param {number} m
 * @param {number} n
 * @returns {Array<Array<number>>}
 */

function listSquared(m, n) {
  const result = [];

  for (let i = m; i <= n; i++) {
    let sumOfDivisorsSquared = 0;

    for (let j = 1; j <= Math.sqrt(i); j++) {
      if (i % j === 0) {
        sumOfDivisorsSquared += j * j;
        if (j !== i / j) {
          sumOfDivisorsSquared += (i / j) * (i / j);
        }
      }
    }

    const sqrt = Math.sqrt(sumOfDivisorsSquared);
    if (Number.isInteger(sqrt)) {
      result.push([i, sumOfDivisorsSquared]);
    }
  }

  return result;
}
