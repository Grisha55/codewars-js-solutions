function prefill(n, v) {
	// Проверка на undefined
	if (n === undefined) {
		throw new TypeError('undefined is invalid');
	}

	let num;

	// Обработка строкового ввода
	if (typeof n === 'string') {
		const trimmed = n.trim();

		// Проверка на пустую строку
		if (trimmed.length === 0) {
			throw new TypeError(`${n} is invalid`);
		}

		// Проверка, что все символы - цифры
		let allDigits = true;
		for (let i = 0; i < trimmed.length; i++) {
			const charCode = trimmed.charCodeAt(i);
			// Коды символов цифр от 48 ('0') до 57 ('9')
			if (charCode < 48 || charCode > 57) {
				allDigits = false;
				break;
			}
		}

		if (!allDigits) {
			throw new TypeError(`${n} is invalid`);
		}

		num = Number(trimmed);

		if (isNaN(num)) {
			throw new TypeError(`${n} is invalid`);
		}
	} else if (typeof n === 'number') {
		if (isNaN(n) || !isFinite(n) || !Number.isInteger(n)) {
			throw new TypeError(`${n} is invalid`);
		}
		num = n;
	} else {
		throw new TypeError(`${n} is invalid`);
	}

	if (num < 0) {
		throw new TypeError(`${n} is invalid`);
	}

	// Используем метод для создания массива без циклов
	const value = v === undefined ? undefined : v;

	// Array.apply создает массив с undefined значениями, которые затем заменяем
	return Array.apply(null, Array(num)).map(() => value);
}
