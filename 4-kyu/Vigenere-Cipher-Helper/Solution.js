/**
 * @function VigenèreCipher
 * @param {string} str
 * @param {string} abc
 * @returns {string}
*/

function VigenèreCipher(key, abc) {
  // Проверка на пустой ключ
  if (!key || !abc) {
    throw new Error('Ключ и алфавит не могут быть пустыми');
  }
  
  /**
   * @function getShift
   * @description Функция для получения сдвига символа ключа
   * @param {number} index- индекс символа в ключе
   * @returns {number} - Величина сдвига
  */
  
  const getShift = (index) => {
    const keyChar = key[index % key.length];
    return abc.indexOf(keyChar);
  };
  
  /**
   * @function transform
   * @description Основная функция для преобразования строки
   * @param {string} str
   * @param {boolean} encode - Флаг кодирования/декодирования
   * @returns {string}
  */
  
  const transform = (str, encode) => {
    let result = '';
    
    for (let i = 0; i < str.length; i++) {
      const char = str[i];
      const abcIndex = abc.indexOf(char);
      
      // Если символа нет в алфавите, оставляем как есть
      if (abcIndex === -1) {
        result += char;
        continue;
      }
      
      // Получаем сдвиг для текущей позиции
      const shift = getShift(i);
      // Вычисляем новый индекс с учетом направления (encode/decode)
      let newIndex = encode
        ? (abcIndex + shift) % abc.length
        : (abcIndex - shift + abc.length) % abc.length;
      
      // Добавляем преобразованный символ к результату
      result += abc[newIndex];
    }
    
    return result;
  };
  
  this.encode = function (str) {
    return transform(str, true);
  };
  this.decode = function (str) {
    return transform(str, false);
  };
}