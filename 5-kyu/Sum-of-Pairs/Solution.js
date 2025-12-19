/**
 * @function sumPairs
 * @param {number[]} ints
 * @param {number} s
 * @returns {number[] | undefined}
 */

function sumPairs(ints, s) {
  const seen = new Set();
  for (let num of ints) {
    const complement = s - num;
    if (seen.has(complement)) {
      return [complement, num];
    }
    seen.add(num);
  }
  return undefined;
}
