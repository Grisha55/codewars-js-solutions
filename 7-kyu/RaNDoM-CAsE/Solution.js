function randomCase(x) {
	const min = 0;
	const max = 1;
	let res = '';
	for (const char of x) {
		if (Math.floor(Math.random() * (max - min + 1)) + min) {
			res += char.toUpperCase();
		} else {
			res += char.toLowerCase();
		}
	}

	return res;
}
