/**
 * @function litres
 * @param {number} time
 * @returns {number}
 */

function litres(time) {
  const res = Math.round(Math.floor(time * 0.5));
  return res;
}
