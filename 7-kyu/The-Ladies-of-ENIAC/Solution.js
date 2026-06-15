function radLadies(name) {
	let res = '';

	for (let c of name) {
		const lower = c.toLowerCase();
		if ((lower >= 'a' && lower <= 'z') || lower === ' ' || lower === '!') {
			res += c;
		}
	}

	return res.toUpperCase();
}
