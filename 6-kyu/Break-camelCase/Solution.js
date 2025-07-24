/**
 * @function solution
 * @param {string} string
 * @returns {string}
*/

function solution(string) {
  let res = '';
  
  for (let i = 0; i < string.length; i++) {
    const char = string[i];
    
    // Если текущий символ - заглавная буква и это не первый символ
    if (char === char.toUpperCase() && char !== char.toLowerCase() && i > 0) {
      res += ' ' + char;
    } else {
      res += char;
    }
  }
  
  return res;
}


//   С использованием регулярных выражений: 
  
//   function solution(string) {
//     return string.replace(/([A-Z])/g, ' $1').trim();
//   }