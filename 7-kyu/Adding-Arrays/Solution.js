/**
 * @function arrAdder
 * @param {string [[]]} arr
 * @returns {string}
*/

function arrAdder(arr) {
  const arrsCount = arr[0].length;
  let idx = 0
  let resStr = "";
  
  for (let i = 0; i < arr[0].length; i++) {
    
    for (let j = 0; j < arr.length; j++) {
      resStr += arr[j][i];
    }
    
    resStr += " ";
  }
  
  return resStr.trim();
}