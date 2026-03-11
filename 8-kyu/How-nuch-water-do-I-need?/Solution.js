function howMuchWater(water, load, clothes) {
	// Проверка на слишком много одежды (больше чем 2 * load)
	if (clothes > 2 * load) {
		return 'Too much clothes';
	}

	// Проверка на слишком мало одежды (меньше чем load)
	if (clothes < load) {
		return 'Not enough clothes';
	}

	// Если количество одежды равно load, вода не меняется
	if (clothes === load) {
		return Number(water.toFixed(2));
	}

	// Вычисляем разницу в количестве одежды
	const extraItems = clothes - load;

	// Мультипликативное увеличение: water * 1.1^(extraItems)
	const result = water * Math.pow(1.1, extraItems);

	// Округляем до 2 знаков
	return Math.round(result * 100) / 100;
}
