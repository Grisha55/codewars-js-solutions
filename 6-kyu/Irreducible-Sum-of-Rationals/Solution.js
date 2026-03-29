function sumFracts(l) {
	if (l.length === 0) return null;

	// Находим НОД
	function gcd(a, b) {
		while (b !== 0) {
			let temp = b;
			b = a % b;
			a = temp;
		}
		return a;
	}

	// Находом НОК
	function lcm(a, b) {
		return (a * b) / gcd(a, b);
	}

	// Находим НОК всех знаменателей
	let commonDenominator = l[0][1];
	for (let i = 1; i < l.length; i++) {
		commonDenominator = lcm(commonDenominator, l[i][1]);
	}

	// Находим сумму числителей с общим знаменателем
	let sumNumerator = 0;
	for (let i = 0; i < l.length; i++) {
		sumNumerator += (commonDenominator / l[i][1]) * l[i][0];
	}

	// Сокращаем дробь
	const divisor = gcd(sumNumerator, commonDenominator);
	const reducedNumerator = sumNumerator / divisor;
	const reducedDenominator = commonDenominator / divisor;

	if (reducedDenominator === 1) {
		return reducedNumerator;
	} else {
		return [reducedNumerator, reducedDenominator];
	}
}
