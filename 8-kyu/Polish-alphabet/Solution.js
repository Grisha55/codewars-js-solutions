function correctPolishLetters(string) {
	const polishAlphabet = {
		ą: 'a',
		ć: 'c',
		ę: 'e',
		ł: 'l',
		ń: 'n',
		ó: 'o',
		ś: 's',
		ź: 'z',
		ż: 'z'
	};
	let res = '';

	for (const char of string) {
		if (polishAlphabet[char]) {
			res += polishAlphabet[char];
		} else {
			res += char;
		}
	}

	return res;
}
