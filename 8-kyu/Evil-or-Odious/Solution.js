/**
 * @function evil
 * @param {number} n
 * @returns {string}
 */

function evil(n) {
  const binary = n.toString(2);
  const countOfOnes = binary.split('').filter((char) => char === '1').length;

  return countOfOnes % 2 === 0 ? "It's Evil!" : "It's Odious!";
}
