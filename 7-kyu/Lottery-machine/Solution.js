function lottery(str) {
	let res = new Set();

	for (const c of str) {
		if (c >= '0' && c <= '9') {
			res.add(c);
		}
	}

	if (Array(...res).length === 0) return 'One more run!';

	return Array(...res).join('');
}
