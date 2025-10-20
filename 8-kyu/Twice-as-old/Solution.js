/**
 * @function twiceAsOld
 * @param {number} dadYearsOld
 * @param {number} sonYearsOld
 * @returns {number}
 */

function twiceAsOld(dadYearsOld, sonYearsOld) {
  const res = dadYearsOld - sonYearsOld * 2;
  if (res < 0) {
    return res * -1;
  }
  return res;
}
