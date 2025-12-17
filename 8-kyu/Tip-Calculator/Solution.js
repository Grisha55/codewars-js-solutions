/**
 * @function calculateTip
 * @param {number} amount
 * @param {string} rating
 * @returns {number}
 */

function calculateTip(amount, rating) {
  const tip = {
    terrible: 0,
    poor: 0.05,
    good: 0.1,
    great: 0.15,
    excellent: 0.2,
  };

  const key = rating.toLowerCase();

  if (!(key in tip)) {
    return 'Rating not recognised';
  }

  return Math.ceil(amount * tip[key]);
}
