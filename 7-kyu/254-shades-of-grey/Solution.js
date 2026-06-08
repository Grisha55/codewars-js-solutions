function shadesOfGrey(n) {
	if (n <= 0) return [];

	const limit = Math.min(n, 254);
	const result = [];

	for (let i = 1; i <= limit; i++) {
		const hex = i.toString(16).padStart(2, '0');
		result.push(`#${hex}${hex}${hex}`);
	}

	return result;
}
