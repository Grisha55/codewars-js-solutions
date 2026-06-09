function equableTriangle(a, b, c) {
	const p = a + b + c;
	const s = Math.sqrt((p / 2) * (p / 2 - a) * (p / 2 - b) * (p / 2 - c));

	return p === s;
}
