/**
 * @function getSize
 * @param {number} width
 * @param {number} height
 * @param {number} depth
 * @returns {number[]}
 */

function getSize(width, height, depth) {
  const s = 2 * (width * height + width * depth + height * depth);
  const v = width * height * depth;

  return [s, v];
}
