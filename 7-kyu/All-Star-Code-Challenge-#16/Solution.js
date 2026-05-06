function noRepeat(str) {
	const count = {};

	for (const c of str) {
		count[c] = (count[c] || 0) + 1;
	}

	for (const c of str) {
		if (count[c] === 1) {
			return c;
		}
	}

	return '';
}
