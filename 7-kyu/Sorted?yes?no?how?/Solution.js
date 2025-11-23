/**
 * @function isSortedAndHow
 * @param {number[]} array
 * @returns {string}
 */

function isSortedAndHow(array) {
  const asc = [...array].sort((a, b) => a - b);
  const desc = [...array].sort((a, b) => b - a);

  function arraysEqual(a, b) {
    for (let i = 0; i < a.length; i++) {
      if (a[i] !== b[i]) return false;
    }
    return true;
  }

  if (arraysEqual(array, asc)) {
    return 'yes, ascending';
  } else if (arraysEqual(array, desc)) {
    return 'yes, descending';
  } else {
    return 'no';
  }
}
