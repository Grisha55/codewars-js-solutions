/**
 * @function cubeChecker
 * @param {number} volume
 * @param {number} side
 * @returns {boolean}
 */

function cubeChecker(volume, side) {
  if (volume <= 0 || side <= 0 || side > volume) return false;
  return volume === side ** 3;
}
