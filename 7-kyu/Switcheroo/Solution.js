/**
 * @function switcheroo
 * @param {string} x
 * @returns {string}
 */

function switcheroo(x) {
  let res = '';

  for (let i = 0; i < x.length; i++) {
    switch (x[i]) {
      case 'a':
        res += 'b';
        break;
      case 'b':
        res += 'a';
        break;
      default:
        res += x[i];
    }
  }

  return res;
}
