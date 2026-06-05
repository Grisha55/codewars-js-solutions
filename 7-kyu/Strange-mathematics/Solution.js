function strangeMath(n, k) {
	let position = 0;
	let current = 1;

	for (let i = 1; i <= n; i++) {
		position++;
		if (current === k) {
			return position;
		}

		// Переход к следующему числу в лексикографическом порядке
		if (current * 10 <= n) {
			current *= 10;
		} else {
			// Если текущее число оканчивается на 9 или current + 1 > n
			while (current % 10 === 9 || current + 1 > n) {
				current = Math.floor(current / 10);
			}
			current++;
		}
	}

	return position;
}
