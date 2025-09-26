/**
 * @function countPositivesSumNegatives
 * @param {number[]} input
 * @returns {number[]}
 */

function countPositivesSumNegatives(input) {
  if (input === null) return [];
  let positives = 0;
  let negativeSum = 0;

  for (const num of input) {
    if (num > 0) {
      positives++;
    } else {
      negativeSum += num;
    }
  }

  if (positives === 0 && negativeSum === 0) return [];

  return [positives, negativeSum];
}
