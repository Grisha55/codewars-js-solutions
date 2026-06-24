function decompose(n) {
	const gcd = (a, b) => (b === 0 ? a : gcd(b, a % b));

	let num, den;

	// Парсим входные данные
	if (typeof n === 'string' && n.includes('/')) {
		[num, den] = n.split('/').map(Number);
	} else if (
		typeof n === 'number' ||
		(typeof n === 'string' && n.includes('.'))
	) {
		const str = n.toString();
		const parts = str.split('.');
		const intPart = parseInt(parts[0]) || 0;
		const decPart = parts[1];
		den = Math.pow(10, decPart.length);
		num = intPart * den + parseInt(decPart);

		// Для 0.66 используем 66/100
		// Не сокращаем!
	} else if (Array.isArray(n) && n.length === 2) {
		[num, den] = n;
	} else {
		return [];
	}

	// Проверка на ноль
	if (num === 0) return [];

	// Сокращаем дробь только если это не десятичная дробь
	if (!(typeof n === 'number' || (typeof n === 'string' && n.includes('.')))) {
		const g = gcd(Math.abs(num), Math.abs(den));
		num /= g;
		den /= g;
	}

	const result = [];

	// Целая часть
	if (num >= den) {
		const integer = Math.floor(num / den);
		result.push(integer.toString());
		num -= integer * den;
		if (num === 0) return result;
	}

	// Жадный алгоритм
	while (num > 0) {
		const x = Math.ceil(den / num);
		result.push(`1/${x}`);
		num = num * x - den;
		den = den * x;
		const g = gcd(num, den);
		num /= g;
		den /= g;
	}

	return result;
}
