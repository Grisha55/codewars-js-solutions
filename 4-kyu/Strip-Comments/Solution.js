/**
 * @function solution
 * @param {string} text
 * @param {string []} markers
 * @returns {string}
*/

function solution(text, markers) {
  const lines = text.split('\n');
  
  for (let i = 0; i < lines.length; i++) {
    let line = lines[i];
    let minIndex = line.length;
    
    // Находим минимальный индекс любого из маркеров в строке
    for (const marker of markers) {
      const index = line.indexOf(marker);
      if (index !== -1 && index < minIndex) {
        minIndex = index;
      }
    }
    
    // Обрезаем строку до первого маркера и удаляем пробелы в конце
    lines[i] = line.substring(0, minIndex).trimEnd();
  }
  
  return lines.join('\n');
}