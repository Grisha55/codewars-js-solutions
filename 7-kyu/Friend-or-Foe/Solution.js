/**
 * @function friend
 * @param {string[]} friends 
 * @returns {string[]}
 */

function friend(friends){
  let bestFriends = [];
  for (fr of friends) {
    if (fr.length === 4) {
      bestFriends.push(fr);
    }
  }

  return bestFriends;
}