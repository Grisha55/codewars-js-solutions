/**
 * @function findNextSquare
 * @param {number} sq
 * @returns {number}
 */

function findNextSquare(sq) {
  const num = Math.sqrt(sq);
  if (Number.isInteger(num)) {
    return (num + 1) * (num + 1);
  }
  return -1;
}
