/**
 * @function mango
 * @param {number} quantity
 * @param {number} price
 * @returns {number}
 */

function mango(quantity, price) {
  const discountMangos = Math.floor(quantity / 3);
  const mangosNeed = quantity - discountMangos;
  return price * mangosNeed;
}
