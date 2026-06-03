function ArithmeticSequenceSum(a, r, n) {
	let first = a;
	const last = a + (n - 1) * r;
	return (n * (first + last)) / 2;
}
