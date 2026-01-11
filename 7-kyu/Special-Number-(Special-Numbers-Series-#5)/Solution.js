function specialNumber(n) {
	const specials = '012345';

	for (const char of String(n)) {
		if (!specials.includes(char)) {
			return 'NOT!!';
		}
	}

	return 'Special!!';
}