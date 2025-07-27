/**
 * @function snail
 * @param {number [[]]} array
 * @returns {number []}
*/

snail = function(array) {
  if (!array.length) {
    return [];
  }
  
  let result = [];
  let top = 0;
  let bottom = array.length - 1;
  let left = 0;
  let right = array[0].length - 1;
  
  while (top <= bottom && left <= right) {
    // Слева направо (верхняя строка)
    for (let i = left; i <= right; i++) {
      result.push(array[top][i]);
    }
    top++;
    
    // Сверху вниз (правый столбец)
    for (let i = top; i <= bottom; i++) {
      result.push(array[i][right]);
    }
    right--;
    
    // Справа налево (нижняя строка, если она существует)
    if (top <= bottom) {
      for (let i = right; i >= left; i --) {
        result.push(array[bottom][i]);
      }
      bottom--;
    }
    
    // Снизу вверх (левый столбец, если он существует)
    if (left <= right) {
      for (let i = bottom; i >= top; i--) {
        result.push(array[i][left]);
      }
      left ++;
    }
  }
  
  return result;
 }