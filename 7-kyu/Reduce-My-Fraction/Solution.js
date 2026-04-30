function reduce(fraction) {
	let [numerator, denominator] = fraction;

	// Находим НОД (наибольший общий делитель) с помощью алгоритма Евклида
	const gcd = (a, b) => {
		while (b !== 0) {
			const temp = b;
			b = a % b;
			a = temp;
		}
		return a;
	};

	const divisor = gcd(numerator, denominator);

	return [numerator / divisor, denominator / divisor];
}
