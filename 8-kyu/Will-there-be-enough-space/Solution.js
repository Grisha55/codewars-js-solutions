/**
 * @function enough
 * @param {number} cap
 * @param {number} on
 * @param {number} wait
 * @returns {number}
 */

function enough(cap, on, wait) {
  return cap >= on + wait ? 0 : on + wait - cap;
}
