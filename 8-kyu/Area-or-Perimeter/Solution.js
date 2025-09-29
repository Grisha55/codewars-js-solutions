/**
 * @function areaOrPerimeter
 * @param {number} l
 * @param {number} w
 * @returns {number}
 */

const areaOrPerimeter = function (l, w) {
  return l === w ? l * w : 2 * (l + w);
};
