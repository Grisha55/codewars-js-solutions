/**
 * @function highAndLow
 * @param {string[]} numbers
 * @returns {string}
 */

function highAndLow(numbers) {
  // Разбиваем строку на массив чисел
  const nums = numbers.split(' ').map(Number);
  let low = nums[0];
  let high = nums[0];

  for (let i = 1; i < nums.length; i++) {
    if (low > nums[i]) {
      low = nums[i];
    }
    if (high < nums[i]) {
      high = nums[i];
    }
  }

  return `${high} ${low}`;
}