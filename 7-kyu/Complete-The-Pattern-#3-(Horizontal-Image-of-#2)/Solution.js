function pattern(n) {
	if (n <= 0) return '';

	let res = [];

	for (let i = 0; i < n; i++) {
		let row = '';
		for (let j = n; j > n - i - 1; j--) {
			row += j;
		}
		res.push(row);
	}

	return res.join('\n');
}
