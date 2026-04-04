function solve(s, g) {
	const f = g;
	const sec = s - f;
	if (sec % f === 0) {
		return [f, sec];
	}
	return -1;
}
