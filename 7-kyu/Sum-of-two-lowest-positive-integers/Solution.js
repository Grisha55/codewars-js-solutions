/**
 * @function sumTwoSmallestNumbers
 * @param {number[]} numbers
 * @returns {number}
 */

function sumTwoSmallestNumbers(numbers) {
  let curSmall = numbers[0];
  let prevSmall = numbers[1];

  for (let i = 1; i < numbers.length; i++) {
    if (curSmall > numbers[i]) {
      prevSmall = curSmall;
      curSmall = numbers[i];
    } else if (prevSmall > numbers[i]) {
      prevSmall = numbers[i];
    }
  }

  return prevSmall + curSmall;
}