/**
 * @function swapDiagonals
 * @param {number [[]]} matrix
 * @returns {number [[]]}
*/

function swapDiagonals(matrix) {
  const n = matrix.length
   for (let i = 0; i < n; i++) {
     // Меняем местами matrix[i][i] и matrix[i][n - 1 - i]
     const temp = matrix[i][i];
     matrix[i][i] = matrix[i][n - 1 - i];
     matrix[i][n - 1 - i] = temp;
   }
   return matrix;
}