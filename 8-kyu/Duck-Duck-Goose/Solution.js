/**
 * @function duckDuckGoose
 * @param {Object[]} players
 * @param {number} goose
 * @returns {string}
 */

function duckDuckGoose(players, goose) {
  return players[(goose - 1) % players.length].name;
}
