function swap(s, n) {
	if (s.length === 0) return '';
	if (n === 0) return s;

	const swapLetter = c => {
		if (c === c.toUpperCase()) {
			return c.toLowerCase();
		} else {
			return c.toUpperCase();
		}
	};

	const binaryN = n.toString(2);
	let res = '';
	let bIdx = 0;

	for (let i = 0; i < s.length; i++) {
		const c = s[i].toLowerCase();
		if (c >= 'a' && c <= 'z') {
			if (binaryN[bIdx % binaryN.length] === '1') {
				res += swapLetter(s[i]);
			} else {
				res += s[i];
			}
			bIdx++;
		} else {
			res += s[i];
		}
	}

	return res;
}
