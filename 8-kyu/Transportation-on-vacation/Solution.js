/**
 * @function rentalCarCost
 * @param {number} d
 * @returns {number}
 */

function rentalCarCost(d) {
  const dayCost = 40;
  let allSum = d * dayCost;

  if (d >= 7) {
    allSum -= 50;
    return allSum;
  } else if (d >= 3) {
    allSum -= 20;
    return allSum;
  }

  return allSum;
}
