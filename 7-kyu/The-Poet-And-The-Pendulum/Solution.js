function pendulum(arr) {
	// Сортируем массив по возрастанию
	const sorted = [...arr].sort((a, b) => a - b);

	// Создаем результирующий массив нужной длины, заполняя его null
	const result = new Array(arr.length).fill(null);

	// Находим центральный индекс
	const mid = Math.floor((arr.length - 1) / 2);

	// Помещаем наименьший элемент в центр
	result[mid] = sorted[0];

	let leftIndex = mid - 1;
	let rightIndex = mid + 1;
	let isLeftTurn = false; // Начинаем с правой стороны

	// Распределяем остальные элементы
	for (let i = 1; i < sorted.length; i++) {
		if (isLeftTurn) {
			result[leftIndex] = sorted[i];
			leftIndex--;
		} else {
			result[rightIndex] = sorted[i];
			rightIndex++;
		}
		isLeftTurn = !isLeftTurn;
	}

	return result;
}
