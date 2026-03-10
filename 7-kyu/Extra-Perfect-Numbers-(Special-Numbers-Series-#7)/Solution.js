function extraPerfect(n) {
	const res = [];

	for (let i = 1; i <= n; i++) {
		if (i % 2 !== 0) {
			res.push(i);
		}
	}

	return res;
}
