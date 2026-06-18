function roots(a, b, c) {
	const d = b * b - 4 * a * c;

	if (d < 0) {
		return null;
	}

	const sqrtD = Math.sqrt(d);
	const x1 = (-b + sqrtD) / (2 * a);
	const x2 = (-b - sqrtD) / (2 * a);

	const sum = x1 + x2;
	return Math.round(sum * 100) / 100;
}
