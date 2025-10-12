/**
 * @function gooseFilter
 * @param {string[]} birds
 * @returns {string[]}
 */

function gooseFilter(birds) {
  const geese = [
    'African',
    'Roman Tufted',
    'Toulouse',
    'Pilgrim',
    'Steinbacher',
  ];
  let res = [];

  for (const bird of birds) {
    if (!geese.includes(bird)) {
      res.push(bird);
    }
  }
  return res;
}
