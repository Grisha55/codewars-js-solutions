/**
 * @function quadrant
 * @param {number} x
 * @param {number} y
 * @returns {number}
 */

function quadrant(x, y) {
  if (x > 0 && y > 0) return 1;
  if (x < 0 && y > 0) return 2;
  if (x < 0 && y < 0) return 3;
  if (x > 0 && y < 0) return 4;
}
