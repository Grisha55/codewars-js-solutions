function solequa(n) {
	const res = [];

	for (let a = 1; a <= Math.sqrt(n); a++) {
		if (n % a === 0) {
			const b = n / a;
			const x = (a + b) / 2;
			const y = (b - a) / 4;

			if (Number.isInteger(x) && Number.isInteger(y) && x >= 0 && y >= 0) {
				res.push([x, y]);
			}
		}
	}

	return res;
}
