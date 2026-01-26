function generateShape(n) {
	let res = '';
	for (let i = 0; i < n; i++) {
		res += '+'.repeat(n) + '\n';
	}
	return res.trim();
}