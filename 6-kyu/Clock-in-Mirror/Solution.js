function WhatIsTheTime(timeInMirror) {
	const [hours, minutes] = timeInMirror.split(':').map(Number);

	// Переводим зеркальное время в минуты от 12:00
	const mirrorMinutes = (hours % 12) * 60 + minutes;

	// Реальное время в минутах от 12:00
	let realMinutes = 720 - mirrorMinutes;

	// Если получилось 0 минут, значит это 12:00
	if (realMinutes === 0) {
		return '12:00';
	}

	// Преобразуем обратно в часы и минуты
	let realHours = Math.floor(realMinutes / 60);
	let realMins = realMinutes % 60;

	// Корректировка часов: 0 -> 12, остальные как есть
	if (realHours === 0) {
		realHours = 12;
	}

	// Форматируем часы с ведущим нулем (если нужно)
	const formattedHours = realHours < 10 ? `0${realHours}` : `${realHours}`;
	const formattedMins = realMins < 10 ? `0${realMins}` : `${realMins}`;

	return `${formattedHours}:${formattedMins}`;
}
