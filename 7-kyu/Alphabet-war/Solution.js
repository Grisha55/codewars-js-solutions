/**
 * @function alphabetWar
 * @param {string} fight
 * @returns {string}
 */

function alphabetWar(fight) {
  const left = {
    w: 4,
    p: 3,
    b: 2,
    s: 1,
  };

  const right = {
    m: 4,
    q: 3,
    d: 2,
    z: 1,
  };

  let res = 0;

  for (const c of fight) {
    if (left[c]) {
      res += left[c];
    } else if (right[c]) {
      res -= right[c];
    }
  }

  if (res === 0) return `Let's fight again!`;
  return res > 0 ? 'Left side wins!' : 'Right side wins!';
}
