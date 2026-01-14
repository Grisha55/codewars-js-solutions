function multiples(m, n) {
	let res = [];
	for (let i = 1; i <= m; i++) {
		res.push(i * n);
	}
	return res;
}