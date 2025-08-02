/**
 * @function isValidWalk
 * @param {string[]} walk
 * @returns {boolean}
*/

function isValidWalk(walk) {
  if (walk.length !== 10) {
    return false;
  }
  
  let northSouth = 0;
  let eastWest = 0;
  
  for (const direction of walk) {
    switch (direction) {
     case "n": northSouth++; break;
     case "s": northSouth--; break;
     case "e": eastWest++; break;
     case "w": eastWest--; break;
    }
  }
  
  return northSouth === 0 && eastWest === 0;
}