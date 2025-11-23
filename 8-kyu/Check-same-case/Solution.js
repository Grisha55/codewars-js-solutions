/**
 * @function sameCase
 * @param {string} a
 * @param {string} b
 * @returns {number}
 */

function sameCase(a, b) {
  // Проверяем, что оба символа являются буквами
  function isLetter(char) {
    const code = char.charCodeAt(0);
    return (code >= 65 && code <= 90) || (code >= 97 && code <= 122);
  }

  // Если хотя бы один символ не буква, возвращаем -1
  if (!isLetter(a) || !isLetter(b)) {
    return -1;
  }

  // Проверяем, оба ли символа в нижнем регистре ИЛИ оба в верхнем регистре
  if (
    (a === a.toLowerCase() && b === b.toLowerCase()) ||
    (a === a.toUpperCase() && b === b.toUpperCase())
  ) {
    return 1;
  }

  // Если оба символа - буквы, но в разном регистре
  return 0;
}
