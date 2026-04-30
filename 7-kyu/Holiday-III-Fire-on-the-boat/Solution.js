function fireFight(s) {
	let res = '';
	const arr = s.split(' ');

	for (const s of arr) {
		if (s.toLowerCase() === 'fire') {
			res += '~~' + ' ';
		} else {
			res += s + ' ';
		}
	}

	return res.trim();
}
