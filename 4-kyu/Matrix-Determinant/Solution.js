/**
 * @function determinant
 * @param {number [[]]} m
 * @returns {number}
*/

function determinant(m) {
  const n = m.length;
  
  // Базовый случай: матрица 1х1
  if (n === 1) {
    return m[0][0];
  }
  
  // Базовый случай: матрица 2х2
  if (n === 2) {
    return m[0][0] * m[1][1] - m[0][1] * m[1][0];
  }
  
  let det = 0;
  
  // Разложение по первой строке
  for (let i = 0; i < n; i++) {
    // Создаем минор (подматрица без первой строки и i-го столбца)
    const minor = [];
    for (let j = 1; j < n; j++) {
      minor.push(m[j].filter((_, idx) => idx !== i));
    }
    
    // Знакочередование: (-1)^(1 + i + 1) = (-1)^(i)
    const sign = i % 2 === 0 ? 1 : -1;
    
    // Рекурсивный вызов для минора
    det += sign * m[0][i] * determinant(minor);
  }
  
  return det;
};