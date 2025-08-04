/**
 * @function accum
 * @param {string} s
 * @returns {string}
 */

function accum(s) {
  if (s.length === 0) return '';

  let result = [];

  for (let i = 0; i < s.length; i++) {
    let char = s[i];
    let part = char.toUpperCase(); // Первая буква всегда заглавная

    // Добавляем i строчных букв
    part += char.toLowerCase().repeat(i);

    result.push(part);
  }

  return result.join('-');
}