function onesComplement(n) {
	let res = '';
	for (const c of n) {
		if (c === '0') {
			res += '1';
		} else {
			res += '0';
		}
	}

	return res;
}
