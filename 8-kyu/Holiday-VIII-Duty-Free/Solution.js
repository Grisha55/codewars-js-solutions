/**
 * @function dutyFree
 * @param {number} normPrice
 * @param {number} discount
 * @param {number} hol
 */

function dutyFree(normPrice, discount, hol) {
  const save = (normPrice / 100) * discount;
  return Math.floor(hol / save);
}
