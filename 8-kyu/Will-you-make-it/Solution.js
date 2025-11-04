/**
 * @function zeroFuel
 * @param {number} distanceToPump
 * @param {number} mpg
 * @param {number} fuelLeft
 * @returns {boolean}
 */

const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
  const average = fuelLeft * mpg;
  return average >= distanceToPump;
};
