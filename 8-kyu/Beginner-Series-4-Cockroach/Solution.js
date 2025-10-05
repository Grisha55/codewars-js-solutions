/**
 * @function cockroachSpeed
 * @param {number} s
 * @returns {number}
 */

function cockroachSpeed(s) {
  const ms = (s * 1000) / (60 * 60);
  const cms = ms * 100;
  return Math.floor(cms);
}
