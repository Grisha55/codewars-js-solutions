/**
 *@function getCount
 *@param {string}
 *returns {number}
*/

function getCount(str) {
  const vowels = ['a', 'e', 'i', 'o', 'u']
  let count = 0
  for (c of str) {
    if (vowels.includes(c)) {
      count += 1
    }
  }
  return count;
}