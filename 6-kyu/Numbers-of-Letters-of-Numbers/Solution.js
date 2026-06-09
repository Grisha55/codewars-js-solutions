function numbersOfLetters(integer) {
	const digitsToWord = {
		0: 'zero',
		1: 'one',
		2: 'two',
		3: 'three',
		4: 'four',
		5: 'five',
		6: 'six',
		7: 'seven',
		8: 'eight',
		9: 'nine'
	};

	const result = [];
	let current = integer;

	while (true) {
		// Преобразуем число в строку из названий цифр
		const str = current
			.toString()
			.split('')
			.map(d => digitsToWord[d])
			.join('');
		result.push(str);

		// Длина этой строки - следующее число
		const next = str.length;

		// Если достигли стабильного равновесия (число равно длине его названия)
		if (next === current) break;

		current = next;
	}

	return result;
}
