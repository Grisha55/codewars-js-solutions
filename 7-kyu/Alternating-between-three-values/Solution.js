function f(x, cc) {
	const { a, b, c } = cc;

	if (x === a) return b;
	if (x === b) return c;
	if (x === c) return a;
}
