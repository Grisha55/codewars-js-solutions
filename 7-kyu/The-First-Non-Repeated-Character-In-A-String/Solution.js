function firstNonRepeated(s) {
	const count = {};

	for (const c of s) {
		count[c] = (count[c] || 0) + 1;
	}

	for (key in count) {
		if (count[key] === 1) {
			return key;
		}
	}

	return null;
}
