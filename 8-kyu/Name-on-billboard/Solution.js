/**
 * @function billboard
 * @param {string} name
 * @param {number} price
 * @returns {number}
 */

function billboard(name, price = 30) {
  const charsCount = name.length;
  let total = 0;

  for (let i = 0; i < charsCount; i++) {
    total += price;
  }

  return total;
}
