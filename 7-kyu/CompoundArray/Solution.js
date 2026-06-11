function compoundArray(a, b) {
	const result = [];
	const maxLength = Math.max(a.length, b.length);

	for (let i = 0; i < maxLength; i++) {
		if (i < a.length) result.push(a[i]);
		if (i < b.length) result.push(b[i]);
	}

	return result;
}
