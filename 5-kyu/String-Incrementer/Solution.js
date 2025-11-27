/**
 * @function incrementString
 * @param {string} strng
 * @returns {string}
 */

function incrementString(strng) {
  // Находим группу из цифр в конце
  const match = strng.match(/(\d*)$/);
  const number = match[0];

  // Если числа на конце нет — просто добавить "1"
  if (number.length === 0) return strng + '1';

  const numberLength = number.length;
  const incremented = String(Number(number) + 1);

  // Добавляем недостающие ведущие нули
  const padded = incremented.padStart(numberLength, '0');

  return strng.slice(0, -numberLength) + padded;
}
