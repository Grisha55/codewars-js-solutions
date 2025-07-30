/**
 * @function nextSmaller
 * @param {number} n
 * @returns {number}
*/

function nextSmaller(n) {
  // Преобразуем число в массив цифр для удабства обработки
  const digits = String(n).split('').map(Number);
  const length = digits.length;
  
  // 1. Находим точку перестановки (pivot)
  let pivot = -1;
  for (let i = length - 2; i >= 0; i--) {
    if (digits[i] > digits[i + 1]) {
      pivot = i;
      break;
    }
  }
  
  // Если точка перестановки не найдена, значит числа меньше с теми же цифрами нет
  if (pivot === -1) return -1;
  
  // 2. Находим наибольший индекс справа от pivot, где цифра меньше digits[pivot]
  let swapIndex = -1;
  for (let i = length - 1; i > pivot; i--) {
    if (digits[i] < digits[pivot]) {
      swapIndex = i;
      break;
    }
  }
  
  // Меняем местами цифры в pivot и swapIndex
  [digits[pivot], digits[swapIndex]] = [digits[swapIndex], digits[pivot]];
  
  // 3. Сортируем цифры справа от pivt в порядке убывания
  // (это даст максимально возможное число, которое меньше исходного)
  const rightPart = digits.slice(pivot + 1);
  rightPart.sort((num1, num2) => num2 - num1);
  
  // Собираем все цифры вместе
  const resultDigits = [...digits.slice(0, pivot + 1), ...rightPart];
  const result = parseInt(resultDigits.join(''), 10);
  
  // Проверяем, что результат имеет столько же цифр, сколько исходное число
  // (это исключает числа с ведущими нулями)
  return result.toString().length === length ? result : -1;
}