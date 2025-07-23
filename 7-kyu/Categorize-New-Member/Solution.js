/**
 *@function openOrSenior
 *@param {int [[]]} data
 *@returns {string[]}
*/

function openOrSenior(data){
  const result = [];
  
  for (arr of data) {
    if (arr[0] >= 55 && arr[1] > 7) {
      result.push('Senior');
    } else {
      result.push('Open');
    }
  }
  
  return result
}