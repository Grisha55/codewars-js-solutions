function secondSymbol(s, symbol) {
	let seen = false;

	for (let i = 0; i < s.length; i++) {
		if (s[i] === symbol && !seen) {
			seen = true;
			continue;
		}
		if (seen && s[i] === symbol) {
			return i;
		}
	}

	return -1;
}
