/**
 * @function productFib
 * @param {number} prod
 * @returns {[number, number, boolean]}
 */

function productFib(prod) {
  let fibs = [0, 1];

  while (fibs[fibs.length - 1] * fibs[fibs.length - 2] < prod) {
    let firstNum = fibs[fibs.length - 1];
    let secondNum = fibs[fibs.length - 2];
    fibs.push(firstNum + secondNum);
  }

  let firstNum = fibs[fibs.length - 1];
  let secondNum = fibs[fibs.length - 2];

  if (firstNum * secondNum === prod) {
    return [secondNum, firstNum, true];
  } else {
    return [secondNum, firstNum, false];
  }
}
