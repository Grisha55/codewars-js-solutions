/**
 * @function sortArray
 * @param {number []} array
 * @returns {number []}
*/

function sortArray(array) {
  let oddNumbers = [];
  
  for (number of array) {
    if (number % 2 === 1 || number % 2 === -1) {
      oddNumbers.push(number);
    }
  }
  
  let sortedOddNumbers = oddNumbers.sort((num1, num2) => num1 - num2);
  let indexOfOddNumber = 0
  
  for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 === 1 || array[i] % 2 === -1) {
      array[i] = sortedOddNumbers[indexOfOddNumber];
      indexOfOddNumber ++;
    }
  }
  
  return array;
}