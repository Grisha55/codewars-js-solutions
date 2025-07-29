/**
 * @function solution
 * @param {number []} numbers
 * @returns {number}
*/

function solution(numbers) {
  
  /**
   * @function gcd
   * @description Функция для нахождения наибольшего общего делителя (НОД) двух чисел
   * @param {number} num1
   * @param {number} num2
   * @returns {number}
  */
  
  function gcd(num1, num2) {
    while (num2 != 0) {
      let temp = num2;
      num2 = num1 % num2;
      num1 = temp;
    }
    
    return num1
  }
  
  // Находим НОД для всех элементов массива
  let currentGcd = numbers[0];
  for (let i = 1; i < numbers.length; i++) {
    currentGcd = gcd(currentGcd, numbers[i]);
    // Если НОД стал 1, дальше можно не продолжать
    if (currentGcd === 1) {
      break;
    }
  }
  // Минимально возмоная сумма равна НОД * кол-во элементов в массиве
  return currentGcd * numbers.length
}