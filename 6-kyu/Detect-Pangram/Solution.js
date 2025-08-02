/**
 * @function isPangram
 * @param {string} string
 * @returns {boolean}
*/

function isPangram(string){
  const letters = new Set();
  
  for (const char of string.toLowerCase()) {
    // добавляя в Set только буквы (игнорируя цифры и символы)
    if (/[a-z]/.test(char)) {
      letters.add(char);
    }
  }
  
  return letters.size === 26;
}