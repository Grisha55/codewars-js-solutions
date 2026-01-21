function isPythagoreanTriple(integers) {
	const [a, b, c] = integers.sort((x, y) => x - y);
	return a * a + b * b === c * c;
}
