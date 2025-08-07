/**
 * @function findEvenIndex
 * @param {number[]} arr
 * @returns {number}
 */

function findEvenIndex(arr) {
  let totalSum = arr.reduce((sum, num) => sum + num, 0);
  let leftSum = 0;

  for (let i = 0; i < arr.length; i++) {
    // Правая сумма = общая сумма - левая сумма - текущий элемент
    let rightSum = totalSum - leftSum - arr[i];

    if (leftSum === rightSum) {
      return i;
    }

    leftSum += arr[i];
  }

  return -1;
}