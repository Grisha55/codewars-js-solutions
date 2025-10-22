/**
 * @function points
 * @param {string[]} games
 * @returns {number}
 */

function points(games) {
  let res = 0;

  for (const game of games) {
    const x = Number(game[0]);
    const y = Number(game[2]);

    if (x > y) {
      res += 3;
    } else if (x === y) {
      res += 1;
    }
  }

  return res;
}
