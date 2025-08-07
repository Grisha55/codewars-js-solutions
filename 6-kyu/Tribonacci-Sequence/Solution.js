/**
 * @function tribonacci
 * @param {number[]} signature
 * @param {number} n
 * @returns {number[]}
 */

function tribonacci(signature, n) {
  if (n === 0) return [];
  if (n === 1) return [signature[0]];
  if (n === 2) return [signature[0], signature[1]];
  let tribonacciArr = signature;

  for (let i = 2; i < n-1; i++) {
    const sum = tribonacciArr[i - 2] + tribonacciArr[i - 1] + tribonacciArr[i];
    tribonacciArr.push(sum);
  }

  return tribonacciArr;
}