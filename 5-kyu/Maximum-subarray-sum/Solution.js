/**
 * @function maxSequence
 * @param {number []}
 * @returns {number}
*/

var maxSequence = function(arr){
  if (arr.length === 0) {
    return 0;
  }
  
  let isNegative = true;
  for (num of arr) {
    if (num > 0) {
      isNegative = false;
    }
  }
  
  if (isNegative) {
    return 0;
  }
  
  let maxCurrent = arr[0];
  let maxGlobal = arr[0];
  
  for (let i = 1; i < arr.length; i++) {
    // Выбираем: начать новый подмассив или продолжить текущий
    maxCurrent = Math.max(arr[i], maxCurrent + arr[i]);
    
    // Обновляем глобальный максимум
    if (maxCurrent > maxGlobal) {
      maxGlobal = maxCurrent;
    }
  }
  
  return maxGlobal;
}

/*
Алгоритм Кадане (Kadane's Algorithm)
  1. Инициализация:
    - maxCurrent — текущая максимальная сумма подмассива, заканчивающегося на текущем элементе.
  - maxGlobal — глобальная максимальная сумма подмассива.

  2. Проход по массиву:
    - Для каждого элемента обновляем maxCurrent:
      - Либо начинаем новый подмассив с текущего элемента (nums[i]).
      - Либо добавляем текущий элемент к предыдущему подмассиву (maxCurrent + nums[i]).
    - Обновляем maxGlobal, если maxCurrent стал больше.
  3. Результат: maxGlobal.
*/

// Если нужно вернуть не только сумму, но и подмассив:
/*
function maxSubarray(nums) {
    if (nums.length === 0) return { sum: 0, subarray: [] };

    let maxCurrent = nums[0];
    let maxGlobal = nums[0];
    let start = 0, end = 0;
    let tempStart = 0;

    for (let i = 1; i < nums.length; i++) {
        if (nums[i] > maxCurrent + nums[i]) {
            maxCurrent = nums[i];
            tempStart = i;
        } else {
            maxCurrent += nums[i];
        }

        if (maxCurrent > maxGlobal) {
            maxGlobal = maxCurrent;
            start = tempStart;
            end = i;
        }
    }

    return {
        sum: maxGlobal,
        subarray: nums.slice(start, end + 1)
    };
}

console.log(maxSubarray([-2, 1, -3, 4, -1, 2, 1, -5, 4]));
// { sum: 6, subarray: [4, -1, 2, 1] }
*/