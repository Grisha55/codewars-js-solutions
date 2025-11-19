/**
 * @function evenNumbers
 * @param {number[]} array
 * @param {number} number
 * @returns
 */

function evenNumbers(array, number) {
  const evenNums = [...array].filter((num) => num % 2 === 0);
  const reversedNums = [...evenNums].reverse();
  const res = reversedNums.slice(0, number);
  return res.reverse();
}
