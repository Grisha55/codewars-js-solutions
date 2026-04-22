function isTriangular(t) {
	// n * (n + 1) / 2 = t
	// n2 + n - 2t = 0
	// n = (-1 + sqrt(1 + 8t)) / 2

	const discr = 1 + 8 * t;
	const sqrtDiscr = Math.sqrt(discr);

	if (Math.floor(sqrtDiscr) !== sqrtDiscr) {
		return false;
	}

	const n = (-1 + sqrtDiscr) / 2;

	return Number.isInteger(n);
}
