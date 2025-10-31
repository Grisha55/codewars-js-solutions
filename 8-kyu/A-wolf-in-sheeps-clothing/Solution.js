/**
 * @function warnTheSheep
 * @param {string[]} queue
 * @returns {string}
 */

function warnTheSheep(queue) {
  if (queue[queue.length - 1] === 'wolf')
    return 'Pls go away and stop eating my sheep';

  const sheepIdx = queue.length - 1 - queue.indexOf('wolf');
  return `Oi! Sheep number ${sheepIdx}! You are about to be eaten by a wolf!`;
}
