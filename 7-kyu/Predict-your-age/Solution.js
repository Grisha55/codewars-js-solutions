/**
 * @function predictAge
 * @param {number} age1
 * @param {number} age2
 * @param {number} age3
 * @param {number} age4
 * @param {number} age5
 * @param {number} age6
 * @param {number} age7
 * @param {number} age8
 * @returns {number}
 */

function predictAge(age1, age2, age3, age4, age5, age6, age7, age8) {
  const arr = Array(age1, age2, age3, age4, age5, age6, age7, age8);
  const multArr = arr.map((num) => num ** 2);
  const res = Math.sqrt(multArr.reduce((acc, num) => acc + num)) / 2;
  return Math.floor(res);
}
