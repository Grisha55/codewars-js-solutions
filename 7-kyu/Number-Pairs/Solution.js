function getLargerNumbers(a, b) {
	const len = a.length;
	const res = [];

	for (let i = 0; i < len; i++) {
		res.push(Math.max(a[i], b[i]));
	}

	return res;
}
