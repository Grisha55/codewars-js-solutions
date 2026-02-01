function encode(str, n) {
	const key = String(n);
	const res = [];

	for (let i = 0; i < str.length; i++) {
		const charValue = str.charCodeAt(i) - 96;
		const keyDigit = Number(key[i % key.length]);
		res.push(charValue + keyDigit);
	}

	return res;
}
