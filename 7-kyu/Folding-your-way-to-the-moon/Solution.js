/**
 * @function foldTo
 * @param {number} distance
 * @returns {number} 
 */

function foldTo(distance){
  if (distance < 0) return null;
  if (distance === 0) return 0;

  let folds = 0
  let foldsLength = 0.0001;

  while (foldsLength < distance) {
    foldsLength *= 2;
    folds++;
  }

  return folds;
}