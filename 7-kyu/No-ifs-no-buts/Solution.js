function noIfsNoButs(a, b) {
	const relations = [' is greater than ', ' is equal to ', ' is smaller than '];

	const idx = Math.sign(b - a) + 1;

	return a + relations[idx] + b;
}
