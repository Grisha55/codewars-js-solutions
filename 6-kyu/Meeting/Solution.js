/**
 * @function meeting
 * @param {string} s
 * @returns {string}
 */
function meeting(s) {
  return s
    .toUpperCase()
    .split(';')
    .map(name => {
      const [first, last] = name.split(':');
      return [last, first];
    })
    .sort((a, b) => {
      if (a[0] !== b[0]) {
        return a[0].localeCompare(b[0]); // сортировка по фамилии
      }
      return a[1].localeCompare(b[1]);   // сортировка по имени
    })
    .map(([last, first]) => `(${last}, ${first})`)
    .join('');
}
