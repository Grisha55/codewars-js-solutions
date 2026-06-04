function decode(r) {
	// Отделяем число от строки
	let numStr = '';
	let i = 0;
	while (i < r.length && r[i] >= '0' && r[i] <= '9') {
		numStr += r[i];
		i++;
	}

	const num = parseInt(numStr, 10);
	const encoded = r.slice(i);
	const alphabet = 'abcdefghijklmnopqrstuvwxyz';
	let result = '';

	// Проверяем, является ли функция обратимой
	// Функция обратима только если num и 26 взаимно просты (gcd(num, 26) === 1)
	function gcd(a, b) {
		while (b !== 0) {
			const temp = b;
			b = a % b;
			a = temp;
		}
		return a;
	}

	// Если num и 26 не взаимно просты, декодирование невозможно
	if (gcd(num, 26) !== 1) {
		// Дополнительная проверка: для каждого закодированного символа
		// должно быть ровно одно решение
		for (let j = 0; j < encoded.length; j++) {
			const code = encoded.charCodeAt(j) - 97;
			let solutions = 0;
			for (let x = 0; x < 26; x++) {
				if ((x * num) % 26 === code) {
					solutions++;
				}
			}
			if (solutions !== 1) {
				return 'Impossible to decode';
			}
		}
	}

	// Декодируем каждую букву
	for (let j = 0; j < encoded.length; j++) {
		const code = encoded.charCodeAt(j) - 97;
		let decoded = -1;

		for (let x = 0; x < 26; x++) {
			if ((x * num) % 26 === code) {
				decoded = x;
				break;
			}
		}

		if (decoded === -1) return 'Impossible to decode';
		result += alphabet[decoded];
	}

	return result;
}
