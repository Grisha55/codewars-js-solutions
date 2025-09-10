/**
 * @function betterThanAverage
 * @param {number[]} classPoints
 * @param {number} yourPoints
 * @returns {boolean}
 */

function betterThanAverage(classPoints, yourPoints) {
  let averageSum = yourPoints;

  for (const value of classPoints) {
    averageSum += value;
  }

  return yourPoints > averageSum / (classPoints.length + 1) ? true : false;
}
