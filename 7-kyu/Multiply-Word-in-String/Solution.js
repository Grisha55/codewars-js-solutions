function modifyMultiply(str, loc, num) {
	const curWord = str.split(' ')[loc];

	if (!curWord) throw Error('No valid str');

	let res = '';

	for (let i = 0; i < num; i++) {
		res += curWord;
		if (i !== num - 1) {
			res += '-';
		}
	}

	return res;
}
