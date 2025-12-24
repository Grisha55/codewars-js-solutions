/**
 * @function chooseBestSum
 * @param {number} t
 * @param {number} k
 * @param {number[]} ls
 * @returns {number|null}
 */

function chooseBestSum(t, k, ls) {
  let bestSum = null;

  function findSums(startIndex, currentSum, numbersChosen) {
    if (numbersChosen === k) {
      if (currentSum <= t) {
        if (bestSum === null || currentSum > bestSum) {
          bestSum = currentSum;
        }
      }
      return;
    }

    for (let i = startIndex; i < ls.length; i++) {
      findSums(i + 1, currentSum + ls[i], numbersChosen + 1);
    }
  }

  findSums(0, 0, 0);

  return bestSum;
}
