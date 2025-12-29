/**
 * @function multiplyAll
 * @param {number[]} numbers
 * @returns {function}
 */

function multiplyAll(numbers) {
  return function (multiplier) {
    return numbers.map((number) => {
      return number * multiplier;
    });
  };
}
