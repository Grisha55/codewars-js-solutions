/**
 @function isInteresting
 @param {number} number
 @param {number []}
 @returns {number}
*/

function isInteresting(number, awesomePhrases) {
  
  /**
   * @function checkForInteresting
   * @param {number} num
   * @parma {number []} phrases
   * @returns {bool}
  */
  
  function checkForInteresting(num, phrases) {
    if (num < 100) {
      return false;
    }
  
    const str = num.toString();
  
    // Проверяем, если после первой цифры все нули
    if (/^[1-9]0+$/.test(str)) {
      return true;
    }
  
    // Проверяем, если все цифры одинаковые
    if (/^(\d)\1+$/.test(str)) {
      return true;
    }
  
    // Проверяем, если цифры последовательные (возрастающие)
    if ('1234567890'.includes(str)) {
      return true;
    }
  
    // Проверяем, если цифры последовательные (убывающие)
    if ('9876543210'.includes(str)) {
      return true;
    }
  
    // Проверяем, если число - палиндром
    if (str === str.split('').reverse().join('')) {
      return true;
    }
  
    // Проверяем, если число - awesomePhrases
    if (awesomePhrases.includes(num)) {
      return true;
    }
    
    return false;
  }
  
  if (checkForInteresting(number, awesomePhrases)) {
    return 2;
  }
  
  if (checkForInteresting(number + 1, awesomePhrases) || checkForInteresting(number + 2, awesomePhrases)) {
    return 1;
  }
  
  return 0;
 
}