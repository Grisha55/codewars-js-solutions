/**
 * @function bump
 * @param {string} x
 * @returns {string}
 */

function bump(x) {
  let bumpsCnt = 0;

  for (const c of x) {
    if (c === 'n') {
      bumpsCnt++;
    }
  }

  return bumpsCnt <= 15 ? 'Woohoo!' : 'Car Dead';
}
