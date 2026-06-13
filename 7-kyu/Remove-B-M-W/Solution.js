function removeBMW(str) {
	if (typeof str !== 'string')
		throw new Error('This program only works for text.');

	let res = '';
	for (let c of str) {
		const lowerC = c.toLowerCase();
		if (lowerC !== 'b' && lowerC !== 'm' && lowerC !== 'w') {
			res += c;
		}
	}

	return res;
}
