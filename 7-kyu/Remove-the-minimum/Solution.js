/**
 * @function removeSmallest
 * @param {number[]} numbers
 * @returns {number[]}
 */

function removeSmallest(numbers) {
  let res = [];
  let smallest = findSmallest(numbers);
  for (const num of numbers) {
    if (num === smallest) {
      smallest = -1;
    } else {
      res.push(num);
    }
  }
  return res;
}

/**
 * @function findSmallest
 * @param {number[]} numbers
 * @returns {number}
 */

function findSmallest(numbers) {
  let smallest = numbers[0];
  for (const number of numbers) {
    if (smallest > number) smallest = number;
  }
  return smallest;
}
