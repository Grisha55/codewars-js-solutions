function changeMe(moneyIn) {
	const values = {
		'£5': 500,
		'£2': 200,
		'£1': 100,
		'50p': 50,
		'20p': 20
	};

	// Если деньги не принимаются
	if (!values[moneyIn]) return moneyIn;

	let value = values[moneyIn];
	const change = [];

	if (value === 20) {
		// Для 20p возвращаем две 10p монеты
		change.push('10p', '10p');
	} else {
		// Для остальных сумм: максимальное количество 20p
		const twenties = Math.floor(value / 20);
		for (let i = 0; i < twenties; i++) {
			change.push('20p');
		}

		const remainder = value - twenties * 20;
		if (remainder === 10) {
			change.push('10p');
		}
	}

	return change.join(' ');
}
