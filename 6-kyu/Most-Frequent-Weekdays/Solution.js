function mostFrequentDays(year) {
	const daysOfWeek = [
		'Monday',
		'Tuesday',
		'Wednesday',
		'Thursday',
		'Friday',
		'Saturday',
		'Sunday'
	];
	const counts = [0, 0, 0, 0, 0, 0, 0];

	// Проходим по всем дням года
	for (let i = 0; i < 365 + (isLeapYear(year) ? 1 : 0); i++) {
		const date = new Date(year, 0, i + 1);
		let dayIndex = date.getDay();
		// Преобразуем: Monday = 0, Sunday = 6
		dayIndex = dayIndex === 0 ? 6 : dayIndex - 1;
		counts[dayIndex]++;
	}

	function isLeapYear(y) {
		return (y % 4 === 0 && y % 100 !== 0) || y % 400 === 0;
	}

	const maxCount = Math.max(...counts);
	const result = [];
	for (let i = 0; i < 7; i++) {
		if (counts[i] === maxCount) {
			result.push(daysOfWeek[i]);
		}
	}

	return result;
}
