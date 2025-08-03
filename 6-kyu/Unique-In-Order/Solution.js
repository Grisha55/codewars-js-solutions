/**
 * @function uniqueInOrder
 * @param {*[]} iterable
 * @returns {*[]}
*/

var uniqueInOrder=function(iterable){
  let uniqueElements = [];
  const n = iterable.length;
  
  for (let i = 1; i < n + 1; i++) {
    if (iterable[i] != iterable[i - 1]) {
      uniqueElements.push(iterable[i - 1]);
    }
  }
  
  return uniqueElements;
}