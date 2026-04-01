function scrabbleScore(str) {
	if (str.length === 0) return 0;
	let sum = 0;

	for (const c of str) {
		const upper = c.toUpperCase();
		if ($dict[upper]) {
			sum += $dict[upper];
		}
	}

	return sum;
}
