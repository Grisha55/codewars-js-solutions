/**
 * @function humanYearsCatYearsDogYears
 * @param {number} humanYears
 * @returns {number[]}
 */

var humanYearsCatYearsDogYears = function (humanYears) {
  if (humanYears === 1) {
    return [humanYears, 15, 15];
  } else if (humanYears === 2) {
    return [humanYears, 15 + 9, 15 + 9];
  } else {
    const catYears = 15 + 9 + (humanYears - 2) * 4;
    const dogYears = 15 + 9 + (humanYears - 2) * 5;
    return [humanYears, catYears, dogYears];
  }
};
