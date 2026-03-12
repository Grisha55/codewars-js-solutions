function unusedDigits(...args) {
	const str = [args].join('');
	let res = '';

	for (let i = 0; i < 10; i++) {
		if (!str.includes(String(i))) {
			res += String(i);
		}
	}
	return res;
}
