/**
 * @function alphabetPosition
 * @param {string} text
 * @returns {string}
 */

function alphabetPosition(text) {
  const alphabetMap = {
    'a': 1, 'b': 2, 'c': 3, 'd': 4,
    'e': 5, 'f': 6, 'g': 7, 'h': 8,
    'i': 9, 'j': 10, 'k': 11, 'l': 12,
    'm': 13, 'n': 14, 'o': 15, 'p': 16, 
    'q': 17, 'r': 18, 's': 19, 't': 20, 
    'u': 21, 'v': 22, 'w': 23, 'x': 24,
    'y': 25, 'z': 26
  };
  
  let finalStr = '';
  
  for (const char of text.toLowerCase()) {
    if (alphabetMap[char] !== undefined) {
      finalStr += ' ' + alphabetMap[char];
    }
  }
  return finalStr.trim();
}

/*
РЕШЕНИЕ С ПОМОЩЬЮ РЕГУЛЯРНЫХ ВЫРАЖЕНИЙ

function alphabetPosition(text) {
  return text.toUpperCase()                          // 1. Преводим текст в верхний регистр
             .replace(/[^A-Z]/g, '')                 // 2. Удаляем все, кроме букв A-Z
             .split('')                              // 3. Разбиваем строку на массив символов
             .map((char) => char.charCodeAt(0) - 64) // 4. Преобразуем буквы в числа (А=1, В=2...)
             .join(' ');                             // 5. Объединяем числа в строку через пробел
}
*/