function lastSurvivor(letters, coords) {
	if (coords.length === 0) return letters;

	let res;

	for (let i = 0; i < coords.length; i++) {
		res = '';
		for (let j = 0; j < letters.length; j++) {
			if (j !== coords[i]) {
				res += letters[j];
			}
		}
		letters = res;
	}

	return res;
}
