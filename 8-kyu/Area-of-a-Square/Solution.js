/**
 * @function squareArea
 * @param {number} A
 * @returns {number}
 */

function squareArea(A) {
  const area = (4 * A * A) / (Math.PI * Math.PI);
  return Number(area.toFixed(2));
}
