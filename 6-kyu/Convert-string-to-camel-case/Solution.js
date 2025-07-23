/**
 *@function toCamelCase
 *@param {string} str
 *@returns {string}
*/

function toCamelCase(str){
  if (!str) {
    return '';
  }
  
  let strs = str.split(/[-_]/);
  
  for (let i = 1; i < strs.length; i++) {
    if (strs[i]) {
      strs[i] = strs[i][0].toUpperCase() + strs[i].slice(1).toLowerCase();
    }
  }
  
  return strs.join('');
}