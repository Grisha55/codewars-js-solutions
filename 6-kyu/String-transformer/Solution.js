function stringTransformer(str) {
	let res = '';
	for (let i = 0; i < str.length; i++) {
		const char = str[i];
		if (char === char.toUpperCase()) {
			res += char.toLowerCase();
		} else {
			res += char.toUpperCase();
		}
	}
	return res.split(' ').reverse().join(' ');
}
