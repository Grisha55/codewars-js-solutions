function borrow(s) {
	const str = s.split(' ').join('');
	let res = '';

	for (let c of str) {
		const lower = c.toLowerCase();
		if (lower >= 'a' && lower <= 'z') {
			res += lower;
		}
	}

	return res;
}
