var whatTimeIsIt = function (angle) {
	// 360 градусов = 12 часов = 720 минут
	// 1 градус = 2 минуты (720/360 = 2)

	// Конвтируем угол в минуты
	let totalMinutes = Math.floor(angle * 2);

	// Вычисляем часы и минуты
	let hours = Math.floor(totalMinutes / 60);
	let minutes = totalMinutes % 60;

	// Корректируем для 12-часового формата
	if (hours === 0) {
		hours = 12;
	}

	// Форматирование с ведущими нулями
	let formattedHours = hours.toString().padStart(2, '0');
	let formattedMinutes = minutes.toString().padStart(2, '0');

	return `${formattedHours}:${formattedMinutes}`;
};
