/**
 * @function gps
 * @param {number} s
 * @param {number[]} x
 * @returns {number}
 */

function gps(s, x) {
  let maxSpeed = 0;
  for (let i = 1; i < x.length; i++) {
    const speed = ((x[i] - x[i - 1]) / s) * 3600;
    if (speed > maxSpeed) {
      maxSpeed = speed;
    }
  }

  return Math.floor(maxSpeed);
}
