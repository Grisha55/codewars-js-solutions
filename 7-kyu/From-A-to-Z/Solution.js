function gimmeTheLetters(sp) {
	const alphabet = 'abcdefghijklmnopqrstuvwxyz';
	const [start, end] = sp.split('-');
	let res = '';

	if (start === end) return start;

	for (const c of alphabet) {
		if (
			(c >= start && c <= end) ||
			(c.toUpperCase() >= start && c.toUpperCase() <= end)
		) {
			res += c;
		}
	}

	if (start === start.toUpperCase()) {
		return res.toUpperCase();
	}

	return res;
}
