/**
 * @function pillars
 * @param {number} numPill
 * @param {number} dist
 * @param {number} width
 * @returns {number}
 */

function pillars(numPill, dist, width) {
  if (numPill === 1) {
    return 0;
  }

  const distCm = dist * 100;
  const gaps = numPill - 1;
  const iPills = Math.max(0, numPill - 2);

  return gaps * distCm + iPills * width;
}
