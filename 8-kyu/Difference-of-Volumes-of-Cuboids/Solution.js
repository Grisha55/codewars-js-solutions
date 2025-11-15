/**
 * @function findDifference
 * @param {number[]} a
 * @param {number[]} b
 * @returns {number}
 */

function findDifference(a, b) {
  const aVolume = a.reduce((acc, num) => acc * num);
  const bVolume = b.reduce((acc, num) => acc * num);
  return Math.abs(aVolume - bVolume);
}
